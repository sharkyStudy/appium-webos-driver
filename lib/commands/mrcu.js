import log from '../logger';
import constants from '../const';

let commands = {};
let extensions = {};

commands.getApps = async function getApps () {
  let response = await this.mrcuBootstrap.request(constants.EP.GET_APPS);
  if (response) {
    return response.payload.launchPoints;
  } else {
    log.error("There was an issue with the command!");
  }
};

commands.getCurrentApp = async function getCurrentApp () {
  // Get the current app id
  let response = await this.mrcuBootstrap.request(constants.EP.GET_CURRENT_APP_INFO);
  if (response) {
    return response.payload.appId;
  } else {
    log.error("There was an issue with the command!");
  }
};

commands.launchAppRC = async function launchAppRC (appPackage = this.opts.appPackage) {
  // Launch an app
  return await this.mrcuBootstrap.command('request', constants.EP.LAUNCH, {
    'id': appPackage
  });
};

commands.launchAppWithParams = async function launchAppWithParams (appPackage = this.opts.appPackage, params) {
  // Launch an app with parameters
  return await this.mrcuBootstrap.request(constants.EP.LAUNCH, {
    'id': appPackage,
    params
  });
};

commands.launchAppWithContentId = async function launchAppWithContentId (appPackage = this.opts.appPackage, contentId) {
  // Launch an app with contentId
  return await this.mrcuBootstrap.request(constants.EP.LAUNCH, {
    'id': appPackage,
    contentId
  });
};

commands.closeAppRC = async function closeAppRC (appPackage = this.opts.appPackage) {
  // Close the current app
  return await this.mrcuBootstrap.request(constants.EP.LAUNCHER_CLOSE, {
    'id': appPackage
  });
};

commands.getServices = async function getServices () {
  // Get all services
  let response = await this.mrcuBootstrap.request(constants.EP.GET_SERVICES);
  if (response) {
    return response.payload.services;
  } else {
    log.error("There was an issue with the command!");
  }
};

commands.getSoftwareInfo = async function getSoftwareInfo () {
  // Return the current software status
  let response = await this.mrcuBootstrap.request(constants.EP.GET_SOFTWARE_INFO);
  if (response) {
    return response.payload;
  } else {
    log.error("There was an issue with the command!");
  }
};

commands.powerOff = async function powerOff () {
  // Play media
  return await this.mrcuBootstrap.request(constants.EP.POWER_OFF);
};

commands.powerOn = async function powerOn () {
  // Play media
  return await this.mrcuBootstrap.request(constants.EP.POWER_ON);
};

commands.turn3dOn = async function turn3dOn () {
  // Turn 3D on
  return await this.mrcuBootstrap.request(constants.EP.THREE_D_ON);
};

commands.turn3dOff = async function turn3dOff () {
  // Turn 3D off
  return await this.mrcuBootstrap.request(constants.EP.THREE_D_OFF);
};

commands.getInputs = async function getInputs () {
  // Get all inputs
  let response = await this.mrcuBootstrap.request(constants.EP.GET_INPUTS);
  log.debug(JSON.stringify(response));
  if (response) {
    return response.payload.devices;
  } else {
    log.error("There was an issue with the command!");
  }
};

commands.setInput = async function setInput (input) {
  // Set the current input
  return await this.mrcuBootstrap.request(constants.EP.SET_INPUT, {
    'inputId': input
  });
};

commands.getAudioStatus = async function getAudioStatus () {
  // Get the current audio status
  let response = await this.mrcuBootstrap.request(constants.EP.GET_AUDIO_STATUS);
  if (response) {
    return response.payload;
  } else {
    log.error("There was an issue with the command!");
  }
};

commands.getMuted = async function getMuted () {
  // Get mute status
  return await this.mrcuBootstrap.request(constants.EP.GET_AUDIO_STATUS).mute;
};

commands.setMute = async function setMute (mute) {
  // Set mute
  return await this.mrcuBootstrap.request(constants.EP.SET_MUTE, {
    mute
  });
};

commands.getVolume = async function getVolume () {
  // Get the current volume
  let response = await this.mrcuBootstrap.request(constants.EP.GET_VOLUME);
  if (response) {
    return response.payload.volume;
  } else {
    log.error("There was an issue with the command!");
  }
};

commands.setVolume = async function setVolume (volume) {
  // Set volume
  volume = Math.max(0, volume);
  return await this.mrcuBootstrap.request(constants.EP.SET_VOLUME, {
    volume
  });
};

commands.volumeUp = async function volumeUp () {
  // Volume up
  return await this.mrcuBootstrap.request(constants.EP.VOLUME_UP);
};

commands.volumeDown = async function volumeDown () {
  // Volume down
  return await this.mrcuBootstrap.request(constants.EP.VOLUME_DOWN);
};

commands.channelUp = async function channelUp () {
  // Channel up
  return await this.mrcuBootstrap.request(constants.EP.TV_CHANNEL_UP);
};

commands.channelDown = async function channelDown () {
  // Channel down
  return await this.mrcuBootstrap.request(constants.EP.TV_CHANNEL_DOWN);
};

commands.getChannels = async function getChannels () {
  // Get all tv channels
  let response = await this.mrcuBootstrap.request(constants.EP.GET_TV_CHANNELS);
  if (response) {
    return response.payload.channelList;
  } else {
    log.error("There was an issue with the command!");
  }
};

commands.getCurrentChannel = async function getCurrentChannel () {
  // Get the current tv channel
  let response = await this.mrcuBootstrap.request(constants.EP.GET_CURRENT_CHANNEL);
  if (response) {
    return response.payload;
  } else {
    log.error("There was an issue with the command!");
  }
};

commands.getChannelInfo = async function getChannelInfo () {
  // Get the current channel info
  let response = await this.mrcuBootstrap.request(constants.EP.GET_CHANNEL_INFO);
  if (response) {
    return response.payload;
  } else {
    log.error("There was an issue with the command!");
  }
};

commands.setChannel = async function setChannel (channel) {
  // Set the current channel
  return await this.mrcuBootstrap.request(constants.EP.SET_CHANNEL, {
    'channelId': channel
  });
};

commands.play = async function play () {
  // Play media
  return await this.mrcuBootstrap.request(constants.EP.MEDIA_PLAY);
};

commands.pause = async function pause () {
  // Pause media
  return await this.mrcuBootstrap.request(constants.EP.MEDIA_PAUSE);
};

commands.stop = async function stop () {
  // Stop media
  return await this.mrcuBootstrap.request(constants.EP.MEDIA_STOP);
};

commands.close = async function close () {
  // Close media
  return await this.mrcuBootstrap.request(constants.EP.MEDIA_CLOSE);
};

commands.rewind = async function rewind () {
  // Rewind media
  return await this.mrcuBootstrap.request(constants.EP.MEDIA_REWIND);
};

commands.fastForward = async function fastForward () {
  // Fast Forward media
  return await this.mrcuBootstrap.request(constants.EP.MEDIA_FAST_FORWARD);
};

commands.sendEnterKey = async function sendEnterKey () {
  // Send enter key
  return await this.mrcuBootstrap.request(constants.EP.SEND_ENTER);
};

commands.sendDeleteKey = async function sendDeleteKey () {
  // Send delete key
  return await this.mrcuBootstrap.request(constants.EP.SEND_DELETE);
};

commands.openUrl = async function openUrl (url) {
  // Open URL
  return await this.mrcuBootstrap.request(constants.EP.OPEN, {
    'target': url
  });
};

commands.closeWeb = async function closeWeb () {
  // Close web app
  return await this.mrcuBootstrap.request(constants.EP.CLOSE_WEB_APP);
};

commands.getSettingsPicture = async function getSettingsPicture () {
  return await this.mrcuBootstrap.request(constants.EP.SYSTEM_SETTINGS, {
    category: "picture",
    keys: ["brightness", "backlight", "contrast", "color"]
  });
};

commands.getSettingsTwinTv = async function getSettingsTwinTv () {
  return await this.mrcuBootstrap.request(constants.EP.SYSTEM_SETTINGS, {
    category: "twinTv",
    keys: ["status", "role", "systemMode"]
  });
};

commands.getSettingsNetwork = async function getSettingsNetwork () {
  return await this.mrcuBootstrap.request(constants.EP.SYSTEM_SETTINGS, {
    category: "network",
    keys: ["deviceName"]
  });
};

commands.getSettingsOption = async function getSettingsOption () {
  return await this.mrcuBootstrap.request(constants.EP.SYSTEM_SETTINGS, {
    category: "option",
    keys: ["audioGuidance"]
  });
};

commands.getSettingsTime = async function getSettingsTime () {
  return await this.mrcuBootstrap.request(constants.EP.SYSTEM_SETTINGS, {
    category: "time",
    keys: ["onTimerVolume"]
  });
};

commands.changeSoundOutput = async function changeSoundOutput (soundOutput) {
  return await this.mrcuBootstrap.request(constants.EP.CHANGE_SOUND_OUTPUT, {
    output: soundOutput
  });
};

commands.turnOffTvScreen = async function turnOffTvScreen () {
  // Possible standbyMode values 'active' and 'passive', passive stay on even when TV is turned off, do not know yet how to get out of that mode - currently need to pull tv plug
  return await this.mrcuBootstrap.request(constants.EP.TURN_OFF_SCREEN, {
    standbyMode: 'active'
  });
};

commands.turnOnTvScreen = async function turnOnTvScreen () {
  // Possible standbyMode values 'active' and 'passive', passive stay on even when TV is turned off, do not know yet how to get out of that mode - currentyl need to pull tv plug
  return await this.mrcuBootstrap.request(constants.EP.TURN_ON_SCREEN, {
    standbyMode: 'active'
  });
};

commands.getGeometry = async function getGeometry () {
  return await this.mrcuBootstrap.request(constants.EP.CONFIG, {
    configNames: ["com.webos.surfacemanager.*"]
  });
};

commands.sendMRCUClick = async function sendMRCUClick () {
  return await this.mrcuBootstrap.mrcuCommand('click');
};

commands.sendMRCUDrag = async function sendMRCUDrag (dx, dy) {
  return await this.mrcuBootstrap.mrcuCommand('drag', { dx, dy, drag: 1 });
};

commands.sendMRCUMove = async function sendMRCUMove (dx, dy) {
  return await this.mrcuBootstrap.mrcuCommand('move', { dx, dy });
};

commands.setValue = async function setValue (buttonCode) {
  return await this.mrcuBootstrap.mrcuCommand('button', { name: buttonCode[0] });
};

commands.sendMRCUButton = async function sendMRCUButton (buttonCode) {
  return await this.mrcuBootstrap.mrcuCommand('button', { name: buttonCode });
};

commands.getCurrentResolution = async function getCurrentResolution () {
  try {
    let geometry = await this.mrcuBootstrap.request(constants.EP.CONFIG, {
      configNames: ["com.webos.surfacemanager.*"]
    });
    let resolution = geometry.payload.configs[
      'com.webos.surfacemanager.compositorGeometry'
    ].match(/^(\d+)[xX](\d+).*/);
    return {
      width: resolution[1],
      height: resolution[2]
    };
  } catch (error) {
    log.error(error);
  }
};

Object.assign(extensions, commands);
export {commands};
export default extensions;
