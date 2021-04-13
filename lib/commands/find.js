import constants from '../const';
import _ from 'lodash';
import { errors, isErrorType } from 'appium-base-driver';

let elements = {};
let index = 0;

let helpers = {};
let commands = {};
let extensions = {};

commands.findBy = async function findBy (strategy, selector, mult = true) {
  return await this.findElOrEls(strategy, selector, mult);
};

helpers.doFindElementOrEls = async function doFindElementOrEls (params) {
  let param = {
    query: params.selector,
    strategy: params.strategy,
    operation: constants.OPERATIONS.FIND
  };

  let result = await this.mrcuBootstrap.findElements(param);

  if (!_.isEmpty(result)) {
    result.forEach(function (element) {
      index++;
      elements[index] = element.ELEMENT;
    });

    if (!params.multiple) {
      result = result[0];
    }
  }

  return result;
};

helpers.findElOrEls = async function findElOrEls (strategy, selector, mult, context = '') {
  this.validateLocatorStrategy(strategy);

  if (!selector) {
    throw new Error("Must provide a selector when finding elements");
  }

  let params = {
    strategy,
    selector,
    context,
    multiple: mult
  };

  let element;
  let doFind = async () => {
    try {
      element = await this.doFindElementOrEls(params);
    } catch (err) {
      if (isErrorType(err, errors.NoSuchElementError)) {
        return false;
      }
      throw err;
    }

    return !_.isEmpty(element);
  };

  try {
    await this.implicitWaitForCondition(doFind);
  } catch (err) {
    if (err.message && err.message.match(/Condition unmet/)) {
      element = [];
    } else {
      throw err;
    }
  }

  if (mult) {
    return element;
  } else {
    if (_.isEmpty(element)) {
      throw new errors.NoSuchElementError();
    }
    return element;
  }
};

helpers.getAutomationId = function getAutomationId (elementId) {
  let result = elements[elementId];
  if (!result) {
    result = "";
  }
  return result;
};

Object.assign(extensions, commands, helpers);
export {commands, helpers};
export default extensions;
