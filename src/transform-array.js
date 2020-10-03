const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error();
  } else {
    let flag = false;
    arr.forEach(function(currentValue) {
      if (currentValue !== undefined) {
        flag = true;
      }
    });
    if (flag === false) return arr;
    let next;
    let prev;
    let copyArr = arr.slice();
    for (let i = 0; i < copyArr.length; i++) {
      if (copyArr[i] === '--discard-next') {
        next = copyArr[i + 1];
        if (next !== undefined) {
          copyArr[i + 1] = undefined;
        }
      } else if (copyArr[i] === '--discard-prev') {
        prev = copyArr[i - 1];
        if (prev !== undefined) {
          copyArr[i - 1] = undefined;
        }
      } else if (copyArr[i] === '--double-next') {
        next = copyArr[i + 1];
        if (next !== undefined) {
          copyArr[i] = copyArr[i + 1];
        }
      } else if (copyArr[i] === '--double-prev') {
        prev = copyArr[i - 1];
        if (prev !== undefined) {
          copyArr[i] = copyArr[i - 1];
        }
      }
      prev = undefined;
      next = undefined;
    }
    for (let i = 0; i < copyArr.length; i++) {
      if (copyArr[i] === '--discard-next' || copyArr[i] === '--discard-prev' || 
          copyArr[i] === '--double-next' || copyArr[i] === '--double-prev' || copyArr[i] === undefined) {
        copyArr.splice(i, 1);
        i--;
      }
    }
    return copyArr;
  }
};
