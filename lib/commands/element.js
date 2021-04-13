/* eslint-disable radix */
/* eslint-disable no-undef */
import log from "../logger";

let commands = {};
let extensions = {};

commands.getAttribute = async function getAttribute (elementId) {
  let selector = this.getAutomationId(elementId);
  return await this.mrcuBootstrap.executeGetAttribute(selector);
};

commands.setAttribute = async function setAttribute (elementId, attribute, value) {
  try {
    let selector = this.getAutomationId(elementId);
    return await this.mrcuBootstrap.executeSetAttribute(
      selector,
      attribute,
      value
    );
  } catch (error) {
    log.errorAndThrow(error);
  }
};

commands.getText = async function getText (elementId) {
  try {
    return await this.mrcuBootstrap.executeGetText(elementId);
  } catch (error) {
    log.errorAndThrow(error);
  }
};

commands.elementEnabled = async function elementEnabled (elementId) {
  try {
    let selector = this.getAutomationId(elementId);
    return await this.mrcuBootstrap.executeElementEnabled(selector);
  } catch (error) {
    log.errorAndThrow(error);
  }
};

commands.elementDisplayed = async function elementDisplayed (elementId) {
  try {
    let selector = this.getAutomationId(elementId);
    return await this.mrcuBootstrap.executeElementDisplayed(selector);
  } catch (error) {
    log.errorAndThrow(error);
  }
};

commands.focusElement = async function focusElement (elementId) {
  try {
    let selector = this.getAutomationId(elementId);
    return await this.mrcuBootstrap.executeElementDisplayed(selector);
  } catch (error) {
    log.errorAndThrow(error);
  }
};

commands.elementFocused = async function elementFocused (elementId) {
  try {
    let selector = this.getAutomationId(elementId);
    return await this.mrcuBootstrap.executeElementFocused(selector);
  } catch (error) {
    log.error(error);
  }
};

commands.getWindowSize = async function getWindowSize () {
  try {
    return await this.mrcuBootstrap.executeGetWindowSize();
  } catch (error) {
    log.errorAndThrow(error);
  }
};

commands.setText = async function setText (elementId, text) {
  try {
    let selector = this.getAutomationId(elementId);
    return await this.mrcuBootstrap.executeSetText(selector, text);
  } catch (error) {
    log.errorAndThrow(error);
  }
};

commands.clear = async function clear (elementId) {
  try {
    let selector = this.getAutomationId(elementId);
    return await this.mrcuBootstrap.executeClear(selector);
  } catch (error) {
    log.errorAndThrow(error);
  }
};

commands.click = async function click (elementId) {
  try {
    let selector = this.getAutomationId(elementId);
    return await this.mrcuBootstrap.executeClick(selector);
  } catch (error) {
    log.errorAndThrow(error);
  }
};

commands.pressKeyOnElement = async function pressKeyOnElement (elementId, key) {
  try {
    let selector = this.getAutomationId(elementId);
    return await this.mrcuBootstrap.executePressKeyOnElement(selector, key);
  } catch (error) {
    log.errorAndThrow(error);
  }
};

commands.getElementCenter = async function getElementCenter (elementId) {
  try {
    let selector = this.getAutomationId(elementId);
    return await this.mrcuBootstrap.executeGetElementCenter(selector);
  } catch (error) {
    log.errorAndThrow(error);
  }
};

commands.getPointerCoordinates = async function getPointerCoordinates () {
  try {
    return await this.mrcuBootstrap.executeGetPointerCoordinates();
  } catch (error) {
    log.errorAndThrow(error);
  }
};

commands.moveMouseToComponent = async function moveMouseToComponent (elementId) {
  try {
    let selector = this.getAutomationId(elementId);
    return await this.mrcuBootstrap.moveMouseToComponent(selector);
  } catch (error) {
    log.errorAndThrow(error);
  }
};

Object.assign(extensions, commands);
export { commands };
export default extensions;
