export var heightChecker = function (heights) {
  let _heights = heights.slice();
  _heights.sort((a, b) => a - b);
  let ans = 0;
  for (let i = 0; i < heights.length; i++) {
    if (heights[i] !== _heights[i]) ans++;
  }
  return ans;
};
