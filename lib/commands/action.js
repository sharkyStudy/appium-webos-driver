import log from "../logger";

let commands = {};
let extensions = {};
let helpers = {};

commands.getScreenshot = async function getScreenshot () {
  try {
    return await this.mrcuBootstrap.executeGetScreenshot();
  } catch (error) {
    log.errorAndThrow(error);
  }
};

commands.getPageSource = async function getPageSource () {
  try {
    return await this.mrcuBootstrap.executeGetText("body");
  } catch (error) {
    log.errorAndThrow(error);
  }
};

Object.assign(extensions, commands, helpers);
export { commands, helpers };
export default extensions;
