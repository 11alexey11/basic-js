const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  debugger;
  if (typeof(sampleActivity) !== "string") return false;
  let numberSampleActivity = +sampleActivity;
  if (!isNaN(numberSampleActivity)) {
    if (numberSampleActivity <= 0 || numberSampleActivity > 15) return false;
  } else return false;
  let strCount = (Math.log(15 / numberSampleActivity) / 1.22).toFixed(2);
  return Number(strCount) * 10000;
};
