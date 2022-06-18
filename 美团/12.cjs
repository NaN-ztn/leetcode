const getNext = (function () {
  const lines = require('fs')
    .readFileSync('0.txt')
    .toString()
    .split(/\r\n|\r|\n/);
  let i = 0;
  return () => lines[i++].trim().split(' ');
})();

let [n] = getNext();
let [str] = getNext();
str = str.split('').map((x) => {
  if (x === 'E') return 1;
  else return -1;
});
let sum = 0;
let ans = 0;
for (let i = 0; i < n; i++) {
  sum = Math.max(sum + str[i], str[i]);
  ans = Math.max(ans, sum);
}
console.log(ans);
