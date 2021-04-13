import log from '../logger';

let commands = {};
let extensions = {};
let helpers = {};

commands.execute = async function execute (script) {
  try {
    const page = await this.mrcuBootstrap.getPage();
    const data = await page.evaluate(script);
    return data;
  } catch (error) {
    log.error(error);
  }
};

Object.assign(extensions, commands, helpers);
export {commands, helpers};
export default extensions;
