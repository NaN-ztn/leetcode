"use strict";

/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var findDiagonalOrder = function findDiagonalOrder(mat) {
  var n = mat.length,
      m = mat[0].length;
  dfs(0, 0);
};