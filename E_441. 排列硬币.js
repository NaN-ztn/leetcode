/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function (n) {
  let i = 1
  for (; i <= n; i++)n -= i
  return i - 1
};

// 二分法
// var arrangeCoins = function (n) {
//   let left = 1, right = n;
//   while (left < right) {
//     const mid = Math.floor((right - left + 1) / 2) + left;
//     if (mid * (mid + 1) <= 2 * n) {
//       left = mid;
//     } else {
//       right = mid - 1;
//     }
//   }
//   return left;
// };

// 作者：LeetCode - Solution
// 链接：https://leetcode-cn.com/problems/arranging-coins/solution/pai-lie-ying-bi-by-leetcode-solution-w52c/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

// 数学公式
// var arrangeCoins = function (n) {
//   return Math.floor((Math.sqrt(8 * n + 1) - 1) / 2);
// };

// 作者：LeetCode - Solution
// 链接：https://leetcode-cn.com/problems/arranging-coins/solution/pai-lie-ying-bi-by-leetcode-solution-w52c/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。