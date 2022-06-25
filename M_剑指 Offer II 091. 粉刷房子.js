/**
 * @param {number[][]} costs
 * @return {number}
 */
export var minCost = function (costs) {
  let n = costs.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < 3; j++) {
      // let min = Math.min(...costs[i].filter((val, index) => index != j));
      let min = Math.min(costs[i][(j + 1) % 3], costs[i][(j + 2) % 3]);
      costs[i + 1][j] = min + costs[i + 1][j];
    }
  }
  return Math.min(...costs[n - 1]);
};
