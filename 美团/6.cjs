const fs = require('fs');

let lines = fs
  .readFileSync('0.txt')
  .toString()
  .trim()
  .split(/\r\n|\r|\n/);
const n = +lines[0];
const str = lines[1];

let headIndex = str.indexOf('T', str.indexOf('M')) + 1;
let tailIndex = str.lastIndexOf('M', str.lastIndexOf('T'));

console.log(str.substring(headIndex, tailIndex));
