import log from '../logger';
import _ from 'lodash';
import {fs} from 'appium-support';
import path from 'path';

let commands = {};
let helpers = {};
let extensions = {};

commands.getDeviceTime = async function getDeviceTime () {
  log.info('Attempting to capture webOS device date and time');
  try {
    let out = await this.ares.shell(['date']);
    return out.trim();
  } catch (err) {
    log.errorAndThrow(`Could not capture device date and time: ${err}`);
  }
};

commands.pressKeyCode = async function pressKeyCode (key) {
  return await this.bootstrap.sendAction("pressKey", {key});
};

commands.releaseKeyCode = async function releaseKeyCode (key) {
  return await this.bootstrap.sendAction("releaseKey", {key});
};

commands.keys = async function keys (keys) {
  let text = _.isArray(keys) ? keys.join('') : keys;
  let params = {
    elementId: "",
    text,
    replace: false
  };
  return await this.bootstrap.sendAction("element:setText", params);
};

commands.sendKey = async function sendKey (key) {
  return await this.bootstrap.sendAction('sendKey', {key});
};

commands.pressHardwareKey = async function pressHardwareKey (key) {
  return await this.sendKey(key);
};

commands.back = async function back () {
  return await this.sendKey("XF86Back");
};

commands.installApp = async function installApp (ipk) {
  const rootDir = path.resolve(__dirname, '..', '..', '..');
  const ipkPath = path.resolve(rootDir, 'app');
  let fullPath = path.resolve(ipkPath, ipk);
  if (!(await fs.exists(fullPath))) {
    log.errorAndThrow(`Could not find app ipk at ${ipk}`);
    return false;
  }
  return this.ares.install(fullPath);
};

commands.removeApp = function removeApp (appPackage = this.opts.appPackage) {
  return this.ares.uninstall(appPackage);
};

commands.isAppInstalled = function isAppInstalled (appPackage = this.opts.appPackage) {
  return this.ares.isAppInstalled(appPackage);
};

commands.launchApp = async function launchApp (appPackage = this.opts.appPackage) {
  return await this.startApp(appPackage);
};

commands.startApp = async function startApp (appPackage = this.opts.appPackage) {
  return await this.ares.startApp(appPackage);
};

commands.closeApp = async function closeApp (appPackage = this.opts.appPackage) {
  await this.ares.closeApp(appPackage);
};

commands.isStartedApp = async function (opts = {}) {
  return await this.ares.isStartedApp(opts);
};

Object.assign(extensions, commands, helpers);
export {commands, helpers};
export default extensions;
