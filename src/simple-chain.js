const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: '',
  count: 0,
  values: [],
  flag: false,
  getLength() {
    return this.values.length;
  },
  addLink(value) {
    if (value === undefined) {
      if (this.chain === '') {
        this.chain += `( )`;
      } else {
        this.chain += `~~( )`;
      }
      this.values.push('');
    } else {
      if (this.chain === '') {
        this.chain += `( ${String(value)} )`;
      } else {
        this.chain += `~~( ${String(value)} )`;
      }
      this.values.push(String(value));
    }
    this.count = this.values.length;
    if (this.flag) return this.chain;
    return this;
  },
  removeLink(position) {
    if (typeof(position) !== 'number' || (position ^ 0) !== position 
        || position > this.getLength() || position <= 0) {
          this.chain = '';
          this.count = 0;
          this.values = [];
          this.flag = false;
          throw new Error();
    } else {
      this.chain = '';
      this.count = 0;
      let copyValues = this.values.slice();
      this.values = [];
      this.flag = true;
      for (let i = 0; i < copyValues.length; i++) {
        if (i !== position - 1) {
          this.chain = this.addLink(copyValues[i]);
        }
      }
      this.flag = false;
    }
    return this;
  },
  reverseChain() {
    this.values.reverse();
    this.chain = '';
    let copyValues = this.values.slice();
    this.values = [];
    this.flag = true;
    for (let i = 0; i < copyValues.length; i++) {
      this.chain = this.addLink(copyValues[i]);
    }
    this.flag = false;
    return this;
  },
  finishChain() {
    this.values = [];
    this.count = 0;
    let chain = this.chain;
    this.chain = '';
    this.flag = false;
    return chain;
  }
};

module.exports = chainMaker;
