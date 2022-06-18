const getNext = (function () {
  const lines = require('fs')
    .readFileSync('0.txt')
    .toString()
    .trim()
    .split(/\r\n|\r|\n/);
  let i = 0;
  return () => lines[i++].split(' ').map((x) => 1 * x);
})();

function dfs(u, v, i) {
  let res = 1;
  for (const p of G[v]) {
    if (p === u) continue;
    if (A[p] < A[i] || A[p] > A[i] + k) continue;
    if (A[p] === A[i] && p < i) continue;
    res = (res * (dfs(v, p, i) + 1)) % MOD;
  }
  return res;
}

const [n, k] = getNext();

let G = new Array(n + 1).fill(0).map(() => []);
for (let i = 1; i < n; i++) {
  let [u, v] = getNext();
  G[u].push(v);
  G[v].push(u);
}

const A = [0, ...getNext()];
const MOD = 1_000_000_007;

let res = 0;
for (let i = 1; i <= n; i++) {
  res = (res + dfs(0, i, i)) % MOD;
}
// process.stdout.write(res + '');
console.log(res);
