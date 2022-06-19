/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var findFrequentTreeSum = function (root) {
  let map = new Map();
  let max = 0;
  function dfs(node) {
    if (!node) {
      return 0;
    }
    const sum = dfs(node.left) + dfs(node.right) + node.val;
    let cnt = (map.get(sum) || 0) + 1;
    map.set(sum, cnt);
    max = Math.max(max, cnt);
    return sum;
  }
  dfs(root);
  let ans = 0;
  for (const [key, value] of map) {
    if (key === max) {
      ans += value;
    }
  }
  return ans;
};
