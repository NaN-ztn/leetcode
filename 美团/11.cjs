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
      .map((x) => 1 * x);
})();

let [M, N, Q] = getNext();
let bookStore = new Array(N + 1).fill(false);
let book = new Array(M + 1).fill(0);

for (let i = 0; i < Q; i++) {
  let line = getNext();
  if (line[0] === 1) {
    let id = line[1];
    let pos = line[2];
    if (book[id] !== -1 && !bookStore[pos] && !bookStore[book[id]]) {
      book[id] = pos;
    }
  } else if (line[0] === 2) {
    bookStore[line[1]] = true;
  } else if (line[0] === 3) {
    bookStore[line[1]] = false;
  } else if (line[0] === 4) {
    let id = line[1];
    let pos = book[id];
    let res = -1;
    if (pos > 0 && !bookStore[pos]) [res, book[id]] = [pos, -1];
    console.log(res);
  } else {
    let id = line[1];
    if(book[id])
    book[id] = 0;
  }
}
