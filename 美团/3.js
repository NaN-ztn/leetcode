const fs = require('fs');
const lines = fs
  .readFileSync('0.txt')
  .toString()
  .trim()
  .split(/\r\n|\r|\n/);

const [n, m] = lines[0].split(' ');
let map = [];
for (let i = 0; i < n; i++) {
  const [v, w] = lines[i + 1].split(' ');
  map[i] = { index: i + 1, value: +v + w * 2 };
}
map = map
  .sort((a, b) => b.value - a.value)
  .slice(0, m)
  .map((v) => v.index)
  .sort((a, b) => a - b);
process.stdout.write(map.join(' '));
