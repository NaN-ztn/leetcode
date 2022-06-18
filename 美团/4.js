const fs = require('fs');
const lines = fs
  .readFileSync('0.txt')
  .toString()
  .trim()
  .split(/\r\n|\r|\n/)
  .map((str) => str.split(' '));

const n = +lines[0][0];
const m = +lines[2][0];
let arra = lines[1];
let arrb = new Array(n).fill(-1);

for (let i = 0; i < m; i++) {
  let a = +lines[i + 3][0],
    b,
    c,
    d;
  if (a === 1) {
    b = +lines[i + 3][1];
    c = lines[i + 3][2] - 1;
    d = lines[i + 3][3] - 1;
    const tail = c + b > n ? n : c + b;
    arrb.splice(d, b, ...arra.slice(c, tail));
  } else {
    b = lines[i + 3][1] - 1;
    console.log(arrb[b]);
  }
}
