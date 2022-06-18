const getNext = (function () {
  const lines = require('fs')
    .readFileSync('0.txt')
    .toString()
    .trim()
    .split(/\r\n|\r|\n/);
  let i = 0;
  return () => lines[i++].split(' ').map((x) => 1 * x);
})();

let [m, n] = getNext();
let arr = getNext();
let res = 0;

for (let i = 1; i <= m; i++) {
  let left = i,
    right = m + 1;
  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    if (check(arr, i, mid)) {
      right = mid;
    } else left = mid + 1;
  }
  res += m - left + 1;
  if (left === m + 1) {
    break;
  }
}

console.log(res);

function check(arr, i, j) {
  let pre = -1;
  for (const x of arr) {
    if (x < i || x > j) {
      if (x < pre) {
        return false;
      }
      pre = x;
    }
  }
  return true;
}
