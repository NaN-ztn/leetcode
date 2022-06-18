function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number}
 */
var pathSum = function (root, targetSum) {
  if (root === null) return 0
  let res = dfs(root, targetSum)
  res += pathSum(root.left, targetSum)
  res += pathSum(root.right, targetSum)
  return res
};
let dfs = (root, targetSum) => {
  let res = 0
  if (root === null) return 0
  if (root.val === targetSum) res++
  res += dfs(root.left, targetSum - root.val)
  res += dfs(root.right, targetSum - root.val)
  return res
}


// 前缀和的方法
// var pathSum = function (root, targetSum) {
//   const prefix = new Map();
//   prefix.set(0, 1);
//   return dfs(root, prefix, 0, targetSum);
// }

// const dfs = (root, prefix, curr, targetSum) => {
//   if (root == null) {
//     return 0;
//   }

//   let ret = 0;
//   curr += root.val;

//   ret = prefix.get(curr - targetSum) || 0;
//   prefix.set(curr, (prefix.get(curr) || 0) + 1);
//   ret += dfs(root.left, prefix, curr, targetSum);
//   ret += dfs(root.right, prefix, curr, targetSum);
//   prefix.set(curr, (prefix.get(curr) || 0) - 1);

//   return ret;
// }

// 作者：LeetCode - Solution
// 链接：https://leetcode-cn.com/problems/path-sum-iii/solution/lu-jing-zong-he-iii-by-leetcode-solution-z9td/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。