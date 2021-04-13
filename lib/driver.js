import { BaseDriver, DeviceSettings } from "appium-base-driver";
import desiredConstraints from "./desired-caps";
import commands from "./commands/index";
import helpers from "./webOS-helpers";
import MRCUBootstrap from "./webOS-mrcu-bootstrap.js";
import log from "./logger";
import _ from "lodash";
import { DEFAULT_ARES_PORT } from "appium-ares";
import { tempDir } from "appium-support";

const BOOTSTRAP_PORT = 8888;
const NO_PROXY = [
  ["POST", new RegExp("^/session/[^/]+/appium")],
  ["GET", new RegExp("^/session/[^/]+/appium")],
];

class WebOSDriver extends BaseDriver {
  constructor (opts = {}, shouldValidateCaps = true) {
    super(opts, shouldValidateCaps);

    this.locatorStrategies = [
      "id",
      "accessibility id",
      "class name",
      "name",
      "css selector",
      "xpath",
    ];

    this.desiredCapConstraints = desiredConstraints;
    this.jwpProxyActive = false;
    this.jwpProxyAvoid = _.clone(NO_PROXY);
    this.settings = new DeviceSettings({ ignoreUnimportantViews: false });
    this.bootstrapPort = BOOTSTRAP_PORT;

    for (let [cmd, fn] of _.toPairs(commands)) {
      WebOSDriver.prototype[cmd] = fn;
    }
  }

  async createSession (caps) {
    try {
      let sessionId;
      [sessionId] = await super.createSession(caps);

      let serverDetails = {
        platform: "LINUX",
        webStorageEnabled: false,
        takesScreenshot: false,
        javascriptEnabled: true,
        databaseEnabled: false,
        networkConnectionEnabled: false,
        locationContextEnabled: false,
        warnings: {},
        desired: this.caps,
      };
      this.caps = Object.assign(serverDetails, this.caps);

      let defaultOpts = {
        tmpDir: await tempDir.staticDir(),
        fullReset: false,
        aresPort: DEFAULT_ARES_PORT,
        webOSInstallTimeout: 50000,
      };
      _.defaults(this.opts, defaultOpts);

      if (this.opts.noReset === true) {
        this.opts.fullReset = false;
      }
      if (this.opts.fullReset === true) {
        this.opts.noReset = false;
      }
      this.opts.fastReset = !this.opts.fullReset && !this.opts.noReset;
      this.opts.skipUninstall = this.opts.fastReset || this.opts.noReset;

      let { udid, emPort, deviceIp } = await helpers.getDeviceInfoFromCaps(
        this.opts
      );
      this.opts.udid = udid;
      this.opts.emPort = emPort;
      this.opts.deviceIp = deviceIp;

      this.ares = await helpers.createARES(
        this.opts.udid,
        this.opts.emPort,
        this.opts.aresPort,
        this.opts.suppressKillServer
      );
      await this.startWebOSSession(this.opts);
      return [sessionId, this.caps];
    } catch (e) {
      try {
        await this.deleteSession();
      } catch (ign) {}
      throw e;
    }
  }

  async getStatus () {
    return await this.sessionId;
  }

  get appOnDevice () {
    return this.helpers.isPackageOrBundle(this.opts.appPackage);
  }

  async startWebOSSession () {
    if (this.opts.app && this.opts.udid) {
      log.debug(`${this.opts.app} && ${this.opts.udid}`);
      await this.installApp(this.opts.app);
    }
    let isAppInstalled = await this.isAppInstalled();
    if (!isAppInstalled) {
      log.errorAndThrow("Could not find App in device.");
    }
    if (this.opts.appPackage) {
      let isStartedApp = await this.isStartedApp(this.opts.appPackage);
      if (isStartedApp) {
        await this.closeApp();
      }
      await this.startApp(this.opts.appPackage);
    }
    this.mrcuBootstrap = new MRCUBootstrap(
      this.ares,
      this.opts,
      this.opts.deviceIp
    );
    await this.mrcuBootstrap.start(this.opts.appPackage);

    if (this.opts.ignoreUnimportantViews) {
      await this.settings.update({
        ignoreUnimportantViews: this.opts.ignoreUnimportantViews,
      });
    }
  }

  async deleteSession () {
    log.debug("Shutting down webOS driver");
    await super.deleteSession();
    if (this.mrcuBootstrap) {
      await this.ares.closeApp(this.opts.appPackage);
      if (
        this.opts.fullReset &&
        !this.opts.skipUninstall &&
        !this.appOnDevice
      ) {
        await this.ares.uninstall(this.opts.appPackage);
      }
      await this.mrcuBootstrap.shutdown();
      this.mrcuBootstrap = null;
    } else {
      log.debug("Called deleteSession but bootstrap wasn't active");
    }
  }

  validateDesiredCaps (caps) {
    let res = super.validateDesiredCaps(caps);
    if (!res) {
      return res;
    }

    if (!caps.appPackage) {
      let msg = "The desired capabilities must include an appPackage";
      log.debug(msg);
    }

    if (!caps.deviceName) {
      let msg = "The desired capabilities must include an deviceName";
      log.debug(msg);
    }

    if (!caps.platformName) {
      let msg = "The desired capabilities must include an platformName WebOS";
      log.debug(msg);
    }
  }

  proxyActive (sessionId) {
    super.proxyActive(sessionId);

    return this.jwpProxyActive;
  }

  getProxyAvoidList (sessionId) {
    super.getProxyAvoidList(sessionId);

    return this.jwpProxyAvoid;
  }

  canProxy (sessionId) {
    super.canProxy(sessionId);

    return false;
  }
}

export { WebOSDriver };
export default WebOSDriver;
