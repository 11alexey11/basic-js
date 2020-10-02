const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (Array.isArray(members)) {
    if (members.length === 0) {
      return null;
    } else {
      let arraySymbol;
      for (let i = 0; i < members.length; i++) {
        if (typeof(members[i]) === "string") {
          members[i] = members[i].trim();
          arraySymbol = members[i].split('');
          arraySymbol[0] = arraySymbol[0].toUpperCase();
          members[i] = arraySymbol.join('');
        }
      }
    }
  } else {
    return false;
  }
  let sortedMembers = members.sort();
  let nameDreamTeam = '';
  sortedMembers.forEach(function(currentValue) {
    if (typeof(currentValue) === 'string') {
      nameDreamTeam += `${currentValue.split('')[0]}`;
    }
  });
  return nameDreamTeam;
};
