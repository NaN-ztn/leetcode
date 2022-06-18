const getNext = (function () {
  const lines = require('fs')
    .readFileSync('0.txt')
    .toString()
    .trim()
    .split(/\r\n|\r|\n/);
  let i = 0;
  return () => lines[i++].split(' ').map((x) => 1 * x);
})();

let ans = [];

const [n] = getNext();
let arr = new Array(n);
for (let i = 0; i < n; i++) {
  arr[i] = getNext();
}

let mark = new Array(n).fill(0);
for (let i = 0; i < n; i++) {
  for (let index = 0; index < n; index++) {
    if (mark[arr[i][index]]) continue;
    else {
      mark[arr[i][index]] = 1;
      ans.push(arr[i][index]);
      break;
    }
  }
}

console.log(ans.join(' '));
