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
var largestValues = function (root) {
  if (!root) return [];
  let ans = [];
  let queue = [root];
  while (queue.length) {
    let len = queue.length;
    let max = Number.MIN_SAFE_INTEGER;
    while (len--) {
      let node = queue.shift();
      max = Math.max(max, node.val);
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
    ans.push(max);
  }
  return ans;
};
