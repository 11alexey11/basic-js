const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof(sampleActivity) !== "number") return false;
  else if (sampleActivity < 0 && sampleActivity > 15) return false;
  let strCount = (Math.log(15 / sampleActivity) / 1.22).toFixed(2);
  let data = Number(strCount) * 10000;
  if (data > 2020) return false;
  return data;
};
