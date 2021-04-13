import log from "./logger";
import {
  routeConfiguringFunction,
  server as baseServer,
} from "appium-base-driver";
import WebOSDriver from "./driver";

async function startServer (port, host) {
  let webOSDriver = new WebOSDriver();
  log.debug("Driver ready!");
  let router = routeConfiguringFunction(webOSDriver);
  let server = await baseServer(router, port, host);
  log.info(`WebOSDriver server listening on http://${host}:${port}`);
  return server;
}

export { startServer };
