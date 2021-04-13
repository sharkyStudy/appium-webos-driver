import _ from "lodash";
import logger from "./logger";
import ARES from "appium-ares";
import constants from "./const";

let helpers = {};

helpers.getDeviceInfoFromCaps = async function getDeviceInfoFromCaps (opts = {}) {
  let ares = await ARES.createARES({
    aresPort: opts.aresPort,
  });
  let udid;
  let deviceIp;
  if (opts.udid) {
    udid = opts.udid;
  } else {
    udid = opts.deviceName;
  }

  let emPort = null;

  if (udid.includes("192.168.250.250") || udid.includes("192.168.1.11")) {
    let result = await ares.ConnectDevice(udid);
    if (result) {
      deviceIp = udid;
      udid = udid + ":26101";
    }
  }

  logger.info("Retrieving device list");

  let devices = await ares.getDevicesWithRetry();

  if (devices.length > 1) {
    for (let i = 0; i < devices.length; i++) {
      if (udid === devices[i].name) {
        udid = devices[i].name;
        deviceIp = devices[i].deviceinfo.split(/[@:]/)[1];
        emPort = devices[i].deviceinfo.split(/[@:]/)[2];
        break;
      }
    }
  } else {
    udid = devices[0].name;
    deviceIp = devices[0].deviceinfo.split(/[@:]/)[1];
    emPort = devices[0].deviceinfo.split(/[@:]/)[2];
  }
  logger.info(`Using device: ${udid} at ${deviceIp}`);
  return { udid, emPort, deviceIp };
};

helpers.createARES = async function createARES (udid, emPort, aresPort, suppressKillServer) {
  let ares = await ARES.createARES({ aresPort, suppressKillServer });
  ares.set("udid", udid);
  if (emPort) {
    ares.set("emulatorPort", emPort);
  }
  return ares;
};

helpers.truncateDecimals = function truncateDecimals (number, digits) {
  let multiplier = Math.pow(10, digits);
  let adjustedNum = number * multiplier;
  let truncatedNum = Math[adjustedNum < 0 ? "ceil" : "floor"](adjustedNum);

  return truncatedNum / multiplier;
};

helpers.removeNullProperties = function removeNullProperties (obj) {
  for (let key of _.keys(obj)) {
    if (_.isNull(obj[key]) || _.isUndefined(obj[key])) {
      delete obj[key];
    }
  }
};

helpers.getStrategy = function getStrategy (strategy) {
  switch (strategy) {
    case "xpath":
      return constants.STRATEGIES.XPATH;
    case "css":
      return constants.STRATEGIES.CSS_SELECTOR;
    default:
      return constants.STRATEGIES.CSS_SELECTOR;
  }
};

export { helpers };
export default helpers;
