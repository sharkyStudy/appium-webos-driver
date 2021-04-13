let commonCapConstraints = {
  platformName: {
    isString: true,
    inclusionCaseInsensitive: ["WebOS"],
    presence: true,
  },
  deviceName: {
    isString: true,
    presence: true,
  },
  app: {
    isString: true,
  },
  appPackage: {
    isString: true,
    presence: true,
  },
  webOSInstallTimeout: {
    isNumber: true,
  },
  aresPort: {
    isNumber: true,
  },
  emPort: {
    isNumber: true,
  },
  udid: {
    isString: true,
    presence: true,
  },
};

let desiredCapConstraints = {};

Object.assign(desiredCapConstraints, commonCapConstraints);

export default desiredCapConstraints;
export { commonCapConstraints };
