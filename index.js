import yargs from 'yargs';
import {asyncify} from 'asyncbox';
import * as server from './lib/server';
import * as driver from './lib/driver';
import * as helpers from './lib/webOS-helpers';
import * as commands from './lib/commands/index';
import * as caps from './lib/desired-caps';


const {WebOSDriver} = driver;
const {startServer} = server;
const {helpers: webOSHelpers} = helpers;
const {commands: webOSCommands} = commands;
const {commonCapConstraints} = caps;

const DEFAULT_HOST = "localhost";
const DEFAULT_PORT = 4723;

async function main () {
  let port = yargs.argv.port || DEFAULT_PORT;
  let host = yargs.argv.host || DEFAULT_HOST;
  return await startServer(port, host);
}

if (require.main === module) {
  asyncify(main);
}

export default WebOSDriver;
export {webOSHelpers, webOSCommands, WebOSDriver, startServer, commonCapConstraints};
