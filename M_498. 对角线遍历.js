/**
 * @param {number[][]} mat
 * @return {number[]}
 */
export var findDiagonalOrder = function (mat) {
  let n = mat.length,
    m = mat[0].length,
    ans = [];
  dfs(0, 0, 1);
  return ans;
  function dfs(i, j, flag) {
    ans.push(mat[i][j]);
    if (ans.length === m * n) {
      return;
    }
    if (flag) {
      if (i - 1 < 0 || j + 1 >= m) {
        flag = 0;
        if (j + 1 >= m) {
          dfs(i + 1, j, flag);
        } else {
          dfs(i, j + 1, flag);
        }
      } else {
        dfs(i - 1, j + 1, flag);
      }
    } else {
      if (j - 1 < 0 || i + 1 >= n) {
        flag = 1;
        if (i + 1 >= n) {
          dfs(i, j + 1, flag);
        } else {
          dfs(i + 1, j, flag);
        }
      } else {
        dfs(i + 1, j - 1, flag);
      }
    }
  }
};
