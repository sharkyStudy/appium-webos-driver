# 🚀 Appium webOS Driver

[![NPM version](http://img.shields.io/npm/v/appium-webos-driver.svg)](https://npmjs.org/package/appium-webos-driver)
[![Downloads](http://img.shields.io/npm/dm/appium-webos-driver.svg)](https://npmjs.org/package/appium-webos-driver)

Appium WebOS Driver is a test automation tool for LG devices. Appium webOS Driver automates LG applications, tested on emulators and real devices. Appium webOS Driver is part of the [Appium](https://github.com/appium/appium) test automation tool.

## Installation

In order to use `appium-webos-driver`, we need to use `appium` version `1.16.0` or higher

```
npm i -g appium-webos-driver
```

## 🚀 Usage

Prerequisites:
_ node 8.x or above
_ npm
_ LG SDK installed with emulators V3.0.0 or above
_ Set the environment variables with the route of your LG SDK installation.

    - (FOR MAC)
    ARES_HOME=/opt/webOS_TV_SDK/CLI
    export PATH=$PATH:$ARES_HOME/bin:$PATH
    export PATH=$PATH:/opt/webOS_TV_SDK/CLI/bin:$PATH

    * If you are using an Emulator with VirtualBox you need to add a new PORT (4724) in the settings/network/advanced/port forward. As a guest and host port.

Import webOS Driver, set and create a session:

```js
import { WebOSDriver } from `appium-webos-driver`

let defaultCaps = {
  app: "/Users/my-computer/com.app.webostv.ipk",
  deviceName: "Home",
  platformName: "WebOS",
  udid: "12354ab9532rf321",
  appPackage: "com.app.webostv",
  fullReset: true
};

let driver = new WebOSDriver();
await driver.createSession(defaultCaps);

```

## 🚀 Capabilities

Desired capabilities (caps) are a set of keys and values (i.e., a map or hash) sent to the Appium server to tell the server what kind of automation session we’re interested in starting up. There are various capabilities that can modify the behavior of the server during automation.

| Capability        | Mandatory Fields | Description                                                                                                                                   |
| ----------------- | ---------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| app               | `✅`             | `The absolute local path or remote http URL to a .zip`<sup>1</sup>                                                                            |
| appPackage        | `✅`             | `The appPackage is the identification for app inside the OS`                                                                                  |
| deviceName        | `✅`             | `The kind of device to use`<sup>1</sup>                                                                                                       |
| platformName      | `✅`             | `Platform target will be automated`<sup>1</sup>                                                                                               |
| noReset           | `🔲`             | `Don't reset app state before this session. See in the osicial documentation of Appium for more details`<sup>2</sup>                          |
| fullReset         | `🔲`             | `Perform a complete reset. See in the osicial documentation of Appium for more details`<sup>2</sup>                                           |
| newCommandTimeout | `🔲`             | `How long (in seconds) Appium will wait for a new command from the client before assuming the client quit and ending the session`<sup>1</sup> |

<sup>1</sup> [Appium Desired Capabilities](https://appium.io/docs/en/writing-running-appium/caps/)

<sup>2</sup> [Reset Strategies](https://appium.io/docs/en/writing-running-appium/other/reset-strategies/index.html)

## 🚀 Commands

- `getAttribute`
