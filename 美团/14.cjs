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

let [n, m, xs, ys, xt, yt] = getNext();
xs -= 1;
ys -= 1;
xt -= 1;
yt -= 1;
let a = new Array(n);
let b = new Array(n);
for (let i = 0; i < n; i++) {
  a[i] = getNext();
}

for (let i = 0; i < n; i++) {
  b[i] = getNext();
}
let mark = new Array(n).fill(0).map(() => new Array(m).fill(false));
let ans = bfs(xs, ys, xt, yt);
console.log(ans);
function bfs(xs, ys, xt, yt) {
  let q = [];
  mark[xs][ys] = true;
  q.push({ x: xs, y: ys, k: 0 });
  while (q.length) {
    let { x, y, k } = q.shift();
    if (x === xt && y === yt) {
      return k;
    }
    if (0 <= k % (a[x][y] + b[x][y]) && k % (a[x][y] + b[x][y]) < a[x][y]) {
      let dir = [1, -1];
      for (let ii = 0; ii < 2; ii++) {
        let i = x + dir[ii];
        let j = y;
        if (i >= 0 && i < n && !mark[i][j]) {
          mark[i][j] = true;
          q.push({ x: i, y: j, k: k + 1 });
        }
      }
    }
    if (a[x][y] <= k % (a[x][y] + b[x][y]) && k % (a[x][y] + b[x][y]) < a[x][y] + b[x][y]) {
      let dir = [1, -1];
      for (let ii = 0; ii < 2; ii++) {
        let i = x;
        let j = y + dir[ii];
        if (j >= 0 && j < m && !mark[i][j]) {
          mark[i][j] = true;
          q.push({ x: i, y: j, k: k + 1 });
        }
      }
    }
    q.push({ x, y, k: k + 1 });
  }
}
