const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options = {}) {
  debugger;
  let copyStr = String(str);
  let repeatTimes = options.repeatTimes;
  let separator = options.separator;
  if (separator === undefined) separator = '+';
  let addition = String(options.addition);
  let additionRepeatTimes = options.additionRepeatTimes;
  let additionSeparator = options.additionSeparator;
  if (additionSeparator === undefined) additionSeparator = '|';
  if (repeatTimes === undefined) {
    if (typeof(addition) === 'string') {
      return copyStr + addition;
    }
    return copyStr;
  } else if (typeof(repeatTimes) === 'number') {
    if (additionRepeatTimes === undefined) {
      copyStr = '';
      for (let i = 0; i < repeatTimes; i++) {
        if (i === repeatTimes - 1) {
          copyStr += str;
        } else {
          copyStr += str + separator;
        }
      }
    } else {
      copyStr = '';
      let additionCopy = '';
      for (let i = 0; i < additionRepeatTimes; i++) {
        if (i === additionRepeatTimes - 1) {
          additionCopy += addition;
        } else {
          if (additionSeparator !== '|') additionCopy += addition + additionSeparator;
        }
      }
      for (let i = 0; i < repeatTimes; i++) {
        if (i  === repeatTimes - 1) {
          copyStr += str + additionCopy;
        } else {
          copyStr += str + additionCopy + separator;
        }
      }
    }
  }
  return copyStr;
};
  
