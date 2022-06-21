/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} raoot
 * @return {number}
 */
var findBottomLeftValue = function (root) {
  function dfs(node, curheight) {
    if (!node) {
      return;
    }
    dfs(node.left, curheight + 1);
    dfs(node.right, curheight + 1);
    if (curheight > height) {
      ans = node.val;
      height = curheight;
    }
  }
  let height = 0;
  let ans = root.val;
  dfs(root, 0);
  return ans;
};
