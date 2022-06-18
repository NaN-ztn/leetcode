const getNext = (function () {
  const lines = require('fs')
    .readFileSync('0.txt')
    .toString()
    .trim()
    .split(/\r\n|\r|\n/);
  let i = 0;
  return () => lines[i++].split(' ').map((x) => 1 * x);
})();

let [n, m] = getNext();
const MOD = 998244353;

let dp = new Array(n + 1).fill(1);
dp[0] = 0;
for (let i = 1; i < m; i++) {
  for (let j = n; j >= 1; j--) {
    for (let k = 2; k * j <= n; k++) {
      dp[k * j] = (dp[k * j] + dp[j]) % MOD;
    }
  }
}
let ans = 0;
for (let i = 1; i <= n; i++) {
  ans = (ans + dp[i]) % MOD;
}
console.log(ans);
