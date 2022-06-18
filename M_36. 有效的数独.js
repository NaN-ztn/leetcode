/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  let row = new Array(9).fill(0).map(() => new Array(9).fill(0))
  let cow = new Array(9).fill(0).map(() => new Array(9).fill(0))
  let cube = new Array(3).fill(0).map(() => new Array(3).fill(0).map(() => new Array(9).fill(0)))
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      const ch = board[i][j]
      if (ch != '.') {
        const index = Number.parseInt(ch) - 1
        const a = ++row[i][index]
        const b = ++cow[j][index]
        const c = ++cube[Math.floor(i / 3)][Math.floor(j / 3)][index]
        if (a > 1 || b > 1 || c > 1)
          return false
      }
    }
  }
  return true
};

console.log(isValidSudoku([["8", "3", ".", ".", "7", ".", ".", ".", "."]
  , ["6", ".", ".", "1", "9", "5", ".", ".", "."]
  , [".", "9", "8", ".", ".", ".", ".", "6", "."]
  , ["8", ".", ".", ".", "6", ".", ".", ".", "3"]
  , ["4", ".", ".", "8", ".", "3", ".", ".", "1"]
  , ["7", ".", ".", ".", "2", ".", ".", ".", "6"]
  , [".", "6", ".", ".", ".", ".", "2", "8", "."]
  , [".", ".", ".", "4", "1", "9", ".", ".", "5"]
  , [".", ".", ".", ".", "8", ".", ".", "7", "9"]]
))
