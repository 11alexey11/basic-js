const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(modification = true) {
    this.modification = modification;
    this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    this.table = [];
  }
  createTable() {
    let alphabetArr = this.alphabet.split('');
    let index = 0;
    let element = '';
    while (index !== this.alphabet.length) {
      this.table[index] = alphabetArr.slice();
      element = alphabetArr.shift();
      alphabetArr.push(element);
      index++;
    }
  }
  createKey(message, key) {
    let newKey = '';
    let j = 0;
    for (let i = 0; i < message.length; i++) {
      if (message[i].charCodeAt() >= 65 && message[i].charCodeAt() <= 90) {
        if (j < key.length) {
          newKey += key[j];
        }
        else {
          j = 0;
          newKey += key[j];
        }
        j++;
      } else {
        newKey += message[i];
      }
    }
    return newKey;
  }
  encrypt(message, key) {
    if (message === undefined || key === undefined) {
      throw new Error();
    }
    message = message.toUpperCase();
    key = key.toUpperCase();
    this.createTable();
    let newKey = this.createKey(message, key);
    let encryptMessage = '';
    let alphabetArr = this.alphabet.split('');
    let firstIndex;
    let secondIndex;
    for (let i = 0; i < message.length; i++) {
      if (message[i].charCodeAt() >= 65 && message[i].charCodeAt() <= 90) {
        firstIndex = alphabetArr.indexOf(message[i]);
        secondIndex = alphabetArr.indexOf(newKey[i]);
        encryptMessage += this.table[firstIndex][secondIndex];
      } else {
        encryptMessage += message[i];
      }
    }
    if (this.modification === false) return encryptMessage.split('').reverse().join('');
    return encryptMessage;
  }    
  decrypt(message, key) {
    if (message === undefined || key === undefined) {
      throw new Error();
    }
    message = message.toUpperCase();
    key = key.toUpperCase();
    this.createTable();
    let newKey = this.createKey(message, key);
    let encryptMessage = '';
    let alphabetArr = this.alphabet.split('');
    let firstIndex;
    let secondIndex;
    let addArr = [];
    for (let i = 0; i < message.length; i++) {
      if (message[i].charCodeAt() >= 65 && message[i].charCodeAt() <= 90) {
        firstIndex = alphabetArr.indexOf(newKey[i]);
        addArr = this.table[firstIndex];
        secondIndex = addArr.indexOf(message[i]);
        encryptMessage += alphabetArr[secondIndex];
      } else {
        encryptMessage += message[i];
      }
    }
    if (this.modification === false) return encryptMessage.split('').reverse().join('');
    return encryptMessage;
  }
}

module.exports = VigenereCipheringMachine;
