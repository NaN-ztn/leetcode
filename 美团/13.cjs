const getNext = (function () {
  const lines = require('fs')
    .readFileSync('0.txt')
    .toString()
    .split(/\r\n|\r|\n/);
  let i = 0;
  return () =>
    lines[i++]
      .trim()
      .split(' ')
      .map((a) => +a);
})();

let [x, y] = getNext();
let arr = getNext();
let ans = new Array(x + y);
if (x === y) {
  for (let i = 0; i < x; i++) {
    ans[i] = 'A';
    ans[i + x] = 'B';
  }
} else if (x < y) {
  arr.map((x, i) => ({ key: i, value: x })).sort((a, b) => a.value - b.value);
  console.log(arr);
  for (let i = 0; i < x; i++) {
    ans[arr[i].key] = 'A';
  }
  for (let i = x; i < x + y; i++) {
    ans[arr[i].key] = 'B';
  }
} else {
  arr.map((x, i) => {return{ key: i, value: x }});
  console.log(arr);
  for (let i = 0; i < y; i++) {
    ans[arr[i].key] = 'B';
  }
  for (let i = y; i < y + x; i++) {
    ans[arr[i].key] = 'A';
  }
}

console.log(ans.join(''));
