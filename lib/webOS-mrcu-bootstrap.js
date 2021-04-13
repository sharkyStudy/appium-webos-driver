/* eslint-disable no-var */
/* eslint-disable object-shorthand */
/* eslint-disable radix */
/* eslint-disable no-undef */
import dgram from "dgram";
import _ from "lodash";
import commands from "./commands/index";
import { sleep } from "asyncbox";
import log from "./logger";
import B, { reject, resolve } from "bluebird";
import WebSocket from "promise-ws";
import fs from "fs";
import constants from "./const";
import got from "got";
import CDP from "chrome-remote-interface";
import puppeteer from "puppeteer";
import minifier from "string-minify";

class WebOSMRCUBootstrap {
  constructor (ares, opts = {}) {
    this.appPackage;
    this.browser;
    this.opts = opts;
    this.ares = ares;
    this.ignoreUnexpectedShutdown = false;
    this.isRestart = false;
    this.promptAccepted = true;
    this.commandCount = 0;
    this.lastResponse = null;
    this.wsPort = 3000;
    this.CDP_BROWSER_CODES = {
      awaitForElement: function (selector) {
        // eslint-disable-next-line promise/no-native
        return new Promise((resolve) => {
          new MutationObserver((mutations, observer) => {
            const nodes = [];
            mutations.forEach((mutation) => {
              nodes.push(...mutation.addedNodes);
            });
            if (nodes.find((node) => node.matches(selector))) {
              observer.disconnect();
              resolve();
            }
          }).observe(document.body, {
            childList: true,
          });
        });
      },
      active: function (selector) {
        return minifier(`
          var object = document.querySelector("${selector}");
          document.activeElement === object;
        `);
      },
      enabled: function (selector) {
        return minifier(`!document.querySelector("${selector}").disabled;`);
      },
      focus: function (selector) {
        return minifier(`document.querySelector("${selector}").focus();`);
      },
      innerHTML: function (selector) {
        return minifier(`document.querySelector("${selector}").innerHTML;`);
      },
      elementDisplayed: function (selector) {
        return minifier(`
          var object = document.querySelector("${selector}");
          object.offsetWidth || object.offsetHeight || object.getClientRects().length;
        `);
      },
      setInnerHTML: function (selector, text) {
        return minifier(
          `
            var object = document.querySelector("${selector}");
            object.innerHTML = ${text};
          `
        );
      },
      click: function (selector) {
        return minifier(
          `
            var object = document.querySelector("${selector}");
            object.click()
          `
        );
      },
      pressKeyOnElement: function (selector, key) {
        return minifier(
          `
            var object = document.querySelector("${selector}");
            object.dispatchEvent(new KeyboardEvent('keydown', {'key': ${key}}));
          `
        );
      },
      center: function (selector) {
        return minifier(
          `
            var object = document.querySelector("${selector}");
            window.center = function (object) {
              let rect = object.getBoundingClientRect();
              return {
                x: rect.left + ((rect.right - rect.left) / 2),
                y: rect.top + ((rect.bottom - rect.top) / 2),
                top: rect.top,
                bottom: rect.bottom,
                left: rect.left,
                right: rect.right,
              };
            };
            window.center(object);
          `
        );
      },
      pointer: function () {
        return minifier(
          "{ x: window.mousePositionX, y: window.mousePositionY }"
        );
      },
      windowSize: function () {
        return minifier(
          `'{ "height":'  + window.screen.height + ', "width": ' + window.screen.width + ' }'`
        );
      },
    };

    for (let [cmd, fn] of _.toPairs(commands)) {
      WebOSMRCUBootstrap.prototype[cmd] = fn;
    }
  }

  async start (appPackage) {
    this.appPackage = appPackage;
    await this.connectSocket();
    await this.connectMRCUSocket();
    return await this.connectDevTools();
  }

  discover () {
    let client = dgram.createSocket("udp4");

    // send message
    client.send(
      constants.DISCOVERY_REQUEST,
      0,
      constants.DISCOVERY_REQUEST.length,
      1900,
      "239.255.255.250"
    );

    client.on("message", function (msg, req_info) {
      log.debug(msg);
      log.debug(JSON.stringify(req_info));
      resolve();
    });

    client.on("error", function (error) {
      log.error("Error: " + error);
      reject(error);
    });
  }

  async awaitPrompt () {
    try {
      return await new B((resolve, reject) => {
        this.lastResponse = null;
        this.socketClient.on("error", (err) => {
          if (!this.ignoreUnexpectedShutdown) {
            throw new Error(
              `WebOS MRCU bootstrap socket crashed: ${JSON.stringify(err)}`
            );
          }
          reject(JSON.stringify(err));
        });
        this.socketClient.on("message", (data) => {
          this.lastResponse = JSON.parse(data);
          switch (this.lastResponse.type) {
            case constants.CONNECTION_STATUS.REGISTERED:
              log.debug("Prompt accepted!");
              resolve(this.lastResponse);
          }
          resolve(JSON.parse(data));
        });
      });
    } catch (error) {
      log.error(error);
    }
  }

  async sendMessage (message) {
    try {
      return await new B((resolve) => {
        this.lastResponse = null;
        this.socketClient.once("message", (data) => {
          this.lastResponse = JSON.parse(data);
          if (this.lastResponse.payload.pairingType === "PROMPT") {
            log.debug("Accept TV prompt to continue");
            resolve(this.awaitPrompt());
          } else {
            resolve(this.lastResponse);
          }
        });
        this.socketClient.send(JSON.stringify(message));
      });
    } catch (error) {
      log.error(error);
    }
  }

  async mrcuSendMessage (message) {
    try {
      await this.mrcuSocketClient.send(message);
    } catch (error) {
      log.error(error);
    }
  }

  async authenticate () {
    log.debug("Registering...");
    try {
      if (fs.existsSync(constants.KEYS_PATH)) {
        log.debug("File exists!");
        this.clientKeys = await new B((resolve, reject) => {
          fs.readFile(constants.KEYS_PATH, (err, data) => {
            if (err) {
              log.debug("Error reading key file...");
              reject(undefined);
            }
            log.debug("Reading key file...");
            resolve(JSON.parse(data));
          });
        });
        if (!this.clientKeys) {
          log.debug("Authenticating, awaiting for authorization...");
          let response = await this.sendMessage(constants.HANDSHAKE_DATA);
          let auxKeys = {};
          this.clientKey = response.payload["client-key"];
          auxKeys[this.opts.deviceIp] = response.payload["client-key"];
        } else {
          log.debug(
            "Key found for authentication, awaiting for authorization..."
          );
          this.clientKey = this.clientKeys[this.opts.deviceIp];
          let register_data = constants.HANDSHAKE_DATA;
          register_data.payload["client-key"] = this.clientKey;
          await this.sendMessage(register_data);
        }
      } else {
        log.debug("File not found, authenticating and registering...");
        let response = await this.sendMessage(constants.HANDSHAKE_DATA);
        log.debug(`Response: ${response}`);
        let auxKeys = {};
        auxKeys[this.opts.deviceIp] = response.payload["client-key"];
        this.clientKey = response.payload["client-key"];
        await this.createKeyFile(auxKeys);
        let register_data = constants.HANDSHAKE_DATA;
        register_data.payload["client-key"] = this.clientKey;
        await this.sendMessage(register_data);
      }
    } catch (err) {
      throw err;
    }
  }

  async createKeyFile (keys) {
    return await new B((resolve, reject) => {
      fs.writeFile(constants.KEYS_PATH, JSON.stringify(keys), function (err) {
        if (err) {
          reject(err);
        }
        log.debug("New key file created!");
        resolve();
      });
    });
  }

  async sendAuthenticationPackage (handshake) {
    try {
      if (handshake.payload["client-key"]) {
        log.debug(
          "Key found for authentication, awaiting for authorization..."
        );
      } else {
        log.debug("Authenticating, awaiting for authorization...");
      }
      return await this.sendMessage(handshake);
    } catch (error) {
      log.errorAndThrow(error);
    }
  }

  async connectDevTools () {
    if (!this.ares.inspectorUrl) {
      try {
        await this.ares.WebInspector(this.opts.udid, this.appPackage);
        const inspectorUrl = new URL(this.ares.inspectorUrl);
        let devtoolsVersionObjectURL = inspectorUrl.origin.concat(
          "/json/version"
        );
        let versionObject;
        await got(devtoolsVersionObjectURL)
          .then((response) => {
            versionObject = JSON.parse(response.body);
          })
          .catch((error) => {
            log.errorAndThrow(error);
          });
        // eslint-disable-next-line no-console
        console.log(versionObject);
        switch (versionObject["Protocol-Version"]) {
          case "1.1":
            this.browser = await CDP({
              host: inspectorUrl.hostname,
              port: inspectorUrl.port,
              local: true,
              protocol: constants.PROTOCOL_DESCRIPTOR,
            });
            // eslint-disable-next-line promise/no-native
            await Promise.all([this.browser.Page.enable()]).then(() => {
              return this.browser.Page.bringToFront;
            });
            await this.browser.DOM.getDocument();
            this.mode = constants.MODES.CDP;
            break;
          case "1.2":
          case "1.3":
            this.browser = await puppeteer.connect({
              browserWSEndpoint: versionObject.webSocketDebuggerUrl,
              defaultViewport: null,
            });
            // eslint-disable-next-line no-case-declarations
            let page = await this.getPage();
            // eslint-disable-next-line no-case-declarations
            let resolution = await this.getResolution();
            await page.evaluate((resolution) => {
              window.mousePositionX = resolution[0] / 2;
              window.mousePositionY = resolution[1] / 2;
              let handleMousemove = (event) => {
                window.mousePositionX = event.clientX;
                window.mousePositionY = event.clientY;
              };
              document.addEventListener("mousemove", handleMousemove);
            }, resolution);
            this.mode = constants.MODES.PUPPETEER;
            break;
        }
      } catch (error) {
        log.errorAndThrow(`Error getting browser handle ${error}`);
      }
    }
  }

  async connectSocket () {
    try {
      if (!this.socketClient) {
        log.debug(`Connecting to ${this.opts.deviceIp}:${this.wsPort}...`);
        this.socketClient = await WebSocket.create(
          `ws://${this.opts.deviceIp}:${this.wsPort}`
        );
        this.socketClient.once("open", () => {
          log.info("WebOS bootstrap socket opened, authenticating...");
        });
        this.socketClient.on("close", () => {
          log.info("this.socketClient ended");
        });
        this.socketClient.once("error", (err) => {
          if (!this.ignoreUnexpectedShutdown) {
            throw new Error(
              `WebOS bootstrap socket crashed: ${JSON.stringify(err)}`
            );
          }
          reject(JSON.stringify(err));
        });
      } else {
        log.info("SocketClient already Created");
      }
      return await this.authenticate();
    } catch (err) {
      log.errorAndThrow(
        `Error occured while reconnection WebOS Bootstrap. Original error: ${err}`
      );
    }
  }

  async connectMRCUSocket () {
    try {
      if (!this.mrcuSocketClient) {
        let mrcuSocketClientInfo = await this.request(
          constants.EP.REMOTE_POINTER_INPUT
        );
        let socketURL = mrcuSocketClientInfo.payload.socketPath;
        this.mrcuSocketClient = await WebSocket.create(socketURL);
        this.mrcuSocketClient.once("open", () => {
          log.info("WebOS MRCU bootstrap socket opened!");
        });
        this.mrcuSocketClient.once("close", () => {
          log.info("WebOS MRCU bootstrap ended");
        });
        this.mrcuSocketClient.once("error", (err) => {
          if (!this.ignoreUnexpectedShutdown) {
            throw new Error(
              `WebOS MRCU bootstrap socket crashed: ${JSON.stringify(err)}`
            );
          }
          reject(JSON.stringify(err));
        });
        log.debug(socketURL);
      } else {
        log.info("mrcuSocketClient already Created");
      }
    } catch (err) {
      log.errorAndThrow(
        `Error occured while reconnection WebOS MRCU Bootstrap. Original error: ${err}`
      );
    }
  }

  async shutdown () {
    await new B((resolve, reject) => {
      try {
        if (this.socketClient) {
          this.socketClient.close();
          delete this.socketClient;
          this.socketClient = null;
        }
        if (this.mrcuSocketClient) {
          this.mrcuSocketClient.close();
          delete this.mrcuSocketClient;
          this.mrcuSocketClient = null;
        }
        resolve();
      } catch (error) {
        reject(error);
      }
    });
    if (this.mode === constants.MODES.PUPPETEER) {
      await this.browser.disconnect();
    } else {
      await this.browser.close();
    }
    await this.ares.destroyPortForwards();
  }

  async command (type, request_type, uri, payload) {
    let isStartedApp = await this.ares.isStartedApp(this.appPackage);
    if (!isStartedApp) {
      await this.ares.startApp(this.appPackage);
      await sleep(10000);
      this.isRestart = false;
    }

    if (!this.socketClient) {
      await this.connectSocket();
    }

    // Build and send a command
    if (payload === null || payload === undefined) {
      payload = {};
    }

    let message = {
      id: `${type}_${this.commandCount}`,
      type,
      uri: `ssap://${uri}`,
      payload,
    };

    try {
      return await this.sendMessage(message);
    } catch (exception) {
      log.error("Dayum");
    }
  }

  async mrcuCommand (type, payload) {
    let isStartedApp = await this.ares.isStartedApp(this.appPackage);
    if (!isStartedApp) {
      await this.ares.startApp(this.appPackage);
      await sleep(10000);
      this.isRestart = false;
    }

    if (!this.socketClient) {
      await this.connectMRCUSocket();
    }

    // Build and send a command
    if (payload === null || payload === undefined) {
      payload = {};
    }

    let message =
      Object.keys(payload)
        .reduce(
          function (acc, k) {
            return acc.concat([k + ":" + payload[k]]);
          },
          ["type:" + type]
        )
        .join("\n") + "\n\n";

    try {
      await this.mrcuSendMessage(message);
    } catch (exception) {
      log.error("Dayum");
    }
  }

  async request (operation, payload = undefined) {
    // Send a request
    return await this.command(
      "request",
      operation.type,
      operation.uri,
      payload
    );
  }

  async returnElementHandlers (action, page) {
    let data;
    try {
      switch (action.strategy) {
        case constants.STRATEGIES.CSS_SELECTOR:
          data = await page.$$(action.query);
          break;
        case constants.STRATEGIES.XPATH:
          data = await page.$x(action.query);
          break;
      }
    } catch (error) {
      log.errorAndThrow(error);
    }
    return data;
  }

  async getPage () {
    try {
      let pageTarget;
      let targets = await this.browser.targets();
      targets.forEach((target) => {
        if (target._targetInfo.type === "page") {
          pageTarget = target;
        }
      });
      let resolution = await this.getResolution();
      let page = await pageTarget.page();
      page.setViewport({
        width: parseInt(resolution[0]),
        height: parseInt(resolution[1]),
      });
      return page;
    } catch (error) {
      log.error(error);
    }
  }

  async getResolution () {
    let geometry = await this.request(constants.EP.CONFIG, {
      configNames: ["com.webos.surfacemanager.compositorGeometry"],
    });
    return geometry.payload.configs[
      "com.webos.surfacemanager.compositorGeometry"
    ]
      .match(/^(\d+)[xX](\d+).*/)
      .slice(1, 3);
  }

  async sendPuppeteerAction (action) {
    try {
      let pageTarget;
      this.browser.targets().forEach((target) => {
        if (target._targetInfo.type === "page") {
          pageTarget = target;
        }
      });
      const page = await pageTarget.page();
      let data;
      switch (action.operation) {
        case constants.OPERATIONS.FIND:
          data = await this.returnElementHandlers(action, page);
          break;
      }
      log.debug(data);
      return data;
    } catch (error) {
      log.errorAndThrow(error);
    }
  }

  async awaitForElement (selector, options) {
    try {
      switch (this.mode) {
        case constants.MODES.PUPPETEER: {
          let page = await this.getPage();
          return await page.waitForSelector(selector, options);
        }
        case constants.MODES.CDP: {
          return await this.Runtime.evaluate({
            expression: `(${
              this.CDP_BROWSER_CODES.awaitForElement
            })(${JSON.stringify(selector)})`,
            awaitPromise: true,
          });
        }
      }
    } catch (error) {
      log.errorAndThrow(error);
    }
  }

  async findElements (params) {
    try {
      let result = [];
      switch (this.mode) {
        case constants.MODES.PUPPETEER: {
          let elements = await this.sendPuppeteerAction(params);
          elements.forEach((element) => {
            result.push({ ELEMENT: element._remoteObject.description });
          });
          break;
        }
        case constants.MODES.CDP: {
          const {searchId, resultCount} = await this.browser.DOM.performSearch({
            query: params.query
          });
          if (!(resultCount === 0)) {
            const {nodeIds} = await this.browser.DOM.getSearchResults({
              searchId,
              fromIndex: 0,
              toIndex: resultCount
            });
            if (!_.isEmpty(nodeIds)) {
              for (const nodeId of nodeIds) {
                let node = await this.browser.DOM.resolveNode({ nodeId });
                log.debug('Find elements: ', node);
                if (nodeId !== 0) {
                  result.push({ "ELEMENT": nodeId });
                }
              }
            }
          }
          break;
        }
        default:
          break;
      }
      return result;
    } catch (error) {
      log.errorAndThrow(error);
    }
  }

  async executeGetAttribute (selector, attribute) {
    try {
      switch (this.mode) {
        case constants.MODES.PUPPETEER: {
          let page = await this.getPage();
          return await page.$eval(
            selector,
            (object, attribute) => object.getAttribute(attribute),
            attribute
          );
        }
        case constants.MODES.CDP: {
          let getAtttributesOptions = { nodeId: parseInt(selector) };
          return await this.browser.DOM.getAttributes(getAtttributesOptions);
        }
      }
    } catch (error) {
      log.errorAndThrow(error);
    }
  }

  async executeSetAttribute (selector, attribute, value) {
    try {
      switch (this.mode) {
        case constants.MODES.PUPPETEER: {
          let page = await this.getPage();
          return await page.$eval(
            selector,
            (object, attribute, value) => object.setAttribute(attribute, value),
            attribute,
            value
          );
        }
        case constants.MODES.CDP: {
          let getAtttributesOptions = { nodeId: parseInt(selector), name: attribute, value };
          return await this.browser.DOM.setAttributeValue(getAtttributesOptions);
        }
      }
    } catch (error) {
      log.errorAndThrow(error);
    }
  }

  async executeGetText (selector) {
    try {
      switch (this.mode) {
        case constants.MODES.PUPPETEER: {
          let page = await this.getPage();
          return await page.$eval(selector, (object) => object.innerHTML);
        }
        case constants.MODES.CDP: {
          let describeNodeOptions = { nodeId: parseInt(selector) };
          let node = await this.browser.DOM.resolveNode(describeNodeOptions);
          let expression = { expression: this.CDP_BROWSER_CODES.innerHTML(node.object.description) };
          let response = await this.browser.Runtime.evaluate(expression);
          return response.result.value;
        }
      }
    } catch (error) {
      log.errorAndThrow(error);
    }
  }

  async executeElementEnabled (selector) {
    try {
      switch (this.mode) {
        case constants.MODES.PUPPETEER: {
          let page = await this.getPage();
          return await page.$x(selector, (object) => !object.disabled);
        }
        case constants.MODES.CDP: {
          let describeNodeOptions = { nodeId: parseInt(selector) };
          let node = await this.browser.DOM.resolveNode(describeNodeOptions);
          let expression = { expression: this.CDP_BROWSER_CODES.enabled(node.object.description) };
          let response = await this.browser.Runtime.evaluate(expression);
          return JSON.parse(response.result.value);
        }
      }
    } catch (error) {
      log.errorAndThrow(error);
    }
  }

  async executeElementDisplayed (selector) {
    try {
      switch (this.mode) {
        case constants.MODES.PUPPETEER: {
          let page = await this.getPage();
          return await page.$eval(
            selector,
            (object) =>
              !!(
                object.offsetWidth ||
                object.offsetHeight ||
                object.getClientRects().length
              )
          );
        }
        case constants.MODES.CDP: {
          let describeNodeOptions = { nodeId: parseInt(selector) };
          let node = await this.browser.DOM.resolveNode(describeNodeOptions);
          let expression = { expression: this.CDP_BROWSER_CODES.elementDisplayed(node.object.description) };
          let response = await this.browser.Runtime.evaluate(expression);
          return JSON.parse(response.result.value);
        }
      }
    } catch (error) {
      log.errorAndThrow(error);
    }
  }

  async executeFocusElement (selector) {
    try {
      switch (this.mode) {
        case constants.MODES.PUPPETEER: {
          let page = await this.getPage();
          return await page.$eval(selector, (object) => object.focus());
        }
        case constants.MODES.CDP: {
          let describeNodeOptions = { nodeId: parseInt(selector) };
          let node = await this.browser.DOM.resolveNode(describeNodeOptions);
          let expression = { expression: this.CDP_BROWSER_CODES.focus(node.object.description) };
          let response = await this.browser.Runtime.evaluate(expression);
          return JSON.parse(response.result.value);
        }
      }
    } catch (error) {
      log.errorAndThrow(error);
    }
  }

  async executeElementFocused (selector) {
    try {
      switch (this.mode) {
        case constants.MODES.PUPPETEER: {
          let page = await this.getPage();
          return await page.$eval(
            query,
            (object) => document.activeElement === object
          );
        }
        case constants.MODES.CDP: {
          let describeNodeOptions = { nodeId: parseInt(selector) };
          let node = await this.browser.DOM.resolveNode(describeNodeOptions);
          let expression = { expression: this.CDP_BROWSER_CODES.active(node.object.description) };
          let response = await this.browser.Runtime.evaluate(expression);
          return JSON.parse(response.result.value);
        }
      }
    } catch (error) {
      log.errorAndThrow(error);
    }
  }

  async executeSetText (selector, text) {
    try {
      switch (this.mode) {
        case constants.MODES.PUPPETEER: {
          let page = await this.getPage();
          return await page.$eval(
            selector,
            (object, text) => (object.innerHTML = text),
            text
          );
        }
        case constants.MODES.CDP: {
          let describeNodeOptions = { nodeId: parseInt(selector) };
          let node = await this.browser.DOM.resolveNode(describeNodeOptions);
          let expression = { expression: this.CDP_BROWSER_CODES.setInnerHTML(node.object.description, text) };
          let response = await this.browser.Runtime.evaluate(expression);
          return JSON.parse(response.result.value);
        }
      }
    } catch (error) {
      log.errorAndThrow(error);
    }
  }

  async executeClear (selector) {
    try {
      switch (this.mode) {
        case constants.MODES.PUPPETEER: {
          let page = await this.getPage();
          return await page.$eval(
            selector,
            (object) => (object.innerHTML = "")
          );
        }
        case constants.MODES.CDP: {
          let describeNodeOptions = { nodeId: parseInt(selector) };
          let node = await this.browser.DOM.resolveNode(describeNodeOptions);
          let expression = { expression: this.CDP_BROWSER_CODES.setInnerHTML(node.object.description, "") };
          let response = await this.browser.Runtime.evaluate(expression);
          return JSON.parse(response.result.value);
        }
      }
    } catch (error) {
      log.errorAndThrow(error);
    }
  }

  async executeClick (selector) {
    try {
      switch (this.mode) {
        case constants.MODES.PUPPETEER: {
          let page = await this.getPage();
          return await page.$eval(selector, (object) => object.click());
        }
        case constants.MODES.CDP: {
          let describeNodeOptions = { nodeId: parseInt(selector) };
          let node = await this.browser.DOM.resolveNode(describeNodeOptions);
          let expression = { expression: this.CDP_BROWSER_CODES.click(node.object.description) };
          let response = await this.browser.Runtime.evaluate(expression);
          return JSON.parse(response.result.value);
        }
      }
    } catch (error) {
      log.errorAndThrow(error);
    }
  }

  async executePressKeyOnElement (selector, key) {
    try {
      switch (this.mode) {
        case constants.MODES.PUPPETEER: {
          let page = await this.getPage();
          return await page.$eval(selector, (object) =>
            object.dispatchEvent(new KeyboardEvent("keydown", { key: key }))
          );
        }
        case constants.MODES.CDP: {
          let describeNodeOptions = { nodeId: parseInt(selector) };
          let node = await this.browser.DOM.resolveNode(describeNodeOptions);
          let expression = {
            expression: this.CDP_BROWSER_CODES.pressKeyOnElement(node.object.description, key)
          };
          let response = await this.browser.Runtime.evaluate(expression);
          return JSON.parse(response.result.value);
        }
      }
    } catch (error) {
      log.errorAndThrow(error);
    }
  }

  async executeGetElementCenter (selector) {
    try {
      switch (this.mode) {
        case constants.MODES.PUPPETEER: {
          let page = await this.getPage();
          await page.evaluate(() => {
            window.center = function (object) {
              let rect = object.getBoundingClientRect();
              return {
                x: rect.left + (rect.right - rect.left) / 2,
                y: rect.top + (rect.bottom - rect.top) / 2,
                top: rect.top,
                bottom: rect.bottom,
                left: rect.left,
                right: rect.right,
              };
            };
          });
          return await page.$eval(selector, (object) => window.center(object));
        }
        case constants.MODES.CDP: {
          let describeNodeOptions = { nodeId: parseInt(selector) };
          let node = await this.browser.DOM.resolveNode(describeNodeOptions);
          let expression = { expression: this.CDP_BROWSER_CODES.center(node.object.description) };
          let response = await this.browser.Runtime.evaluate(expression);
          return JSON.parse(response.result.value);
        }
      }
    } catch (error) {
      log.errorAndThrow(error);
    }
  }

  async executeGetPointerCoordinates () {
    try {
      switch (this.mode) {
        case constants.MODES.PUPPETEER: {
          let page = await this.getPage();
          await page.evaluate(() => {
            window.pointerCoordinates = function () {
              return {
                x: window.mousePositionX,
                y: window.mousePositionY,
              };
            };
          });
          return await page.evaluate(() => window.pointerCoordinates());
        }
        case constants.MODES.CDP: {
          let expression = { expression: this.CDP_BROWSER_CODES.pointer() };
          let response = await this.browser.Runtime.evaluate(expression);
          return JSON.parse(response.result.value);
        }
      }
    } catch (error) {
      log.errorAndThrow(error);
    }
  }

  async executeMoveMouseToComponent (selector) {
    try {
      let elementCoordinates = await this.getElementCenter(selector);
      let mouseCoordinates = await this.getPointerCoordinates();
      await this.mrcuCommand("move", {
        dx: elementCoordinates.x - mouseCoordinates.x,
        dy: elementCoordinates.y - mouseCoordinates.y,
      });
      return await this.getPointerCoordinates();
    } catch (error) {
      log.errorAndThrow(error);
    }
  }

  async executeGetScreenshot () {
    try {
      switch (this.mode) {
        case constants.MODES.PUPPETEER: {
          let page = await this.getPage();
          let data = await page.screenshot({
            fullPage: true,
            omitBackground: true,
            encoding: "base64",
          });
          return data.toString("base64");
        }
        case constants.MODES.CDP: {
          let screenshot = await this.browser.Page.screenshot();
          return screenshot.data;
        }
      }
    } catch (error) {
      log.errorAndThrow(error);
    }
  }

  async executeGetWindowSize () {
    try {
      switch (this.mode) {
        case constants.MODES.PUPPETEER: {
          let geometry = await this.request(constants.EP.CONFIG, {
            configNames: ["com.webos.surfacemanager.*"],
          });
          let resolution = geometry.payload.configs[
            "com.webos.surfacemanager.compositorGeometry"
          ].match(/^(\d+)[xX](\d+).*/);
          return {
            width: parseInt(resolution[1]),
            height: parseInt(resolution[2]),
          };
        }
        case constants.MODES.CDP: {
          let expression = { expression: this.CDP_BROWSER_CODES.windowSize() };
          let response = await this.browser.Runtime.evaluate(expression);
          return JSON.parse(response.result.value);
        }
      }
    } catch (error) {
      log.errorAndThrow(error);
    }
  }
}

export { WebOSMRCUBootstrap };
export default WebOSMRCUBootstrap;
