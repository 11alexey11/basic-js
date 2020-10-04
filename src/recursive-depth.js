const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    if(Array.isArray(arr)) {
      let maxDeep = 0;
      for(let i = 0; i < arr.length; i++) {
          let curDeep = this.calculateDepth(arr[i]);
          if (maxDeep < curDeep) {
            maxDeep = curDeep;
          }
      }
          return 1 + maxDeep;
      } else {
          return 0;
      }
  }
};
