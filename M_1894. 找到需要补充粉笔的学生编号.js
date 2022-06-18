/**
 * @param {number[]} chalk
 * @param {number} k
 * @return {number}
 */
var chalkReplacer = function (chalk, k) {
  let len = chalk.length
  let index = 0
  let ans
  while (true) {
    k -= chalk[index]
    if (k < 0) {
      ans = index
      break
    }
    index = (index + 1) % len
  }
  return ans
}
console.log(chalkReplacer([3, 4, 1, 2], 25))

// 优化模拟
// var chalkReplacer = function (chalk, k) {
//   const n = chalk.length;
//   let total = 0;
//   for (const num of chalk) {
//     total += num;
//   }
//   k %= total;
//   let res = -1;
//   for (let i = 0; i < n; ++i) {
//     if (chalk[i] > k) {
//       res = i;
//       break;
//     }
//     k -= chalk[i];
//   }
//   return res;
// };

// 作者：LeetCode - Solution
// 链接：https://leetcode-cn.com/problems/find-the-student-that-will-replace-the-chalk/solution/zhao-dao-xu-yao-bu-chong-fen-bi-de-xue-s-qrn1/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。


// 前缀和 + 二分
// var chalkReplacer = function (chalk, k) {
//   const n = chalk.length;
//   if (chalk[0] > k) {
//     return 0;
//   }
//   for (let i = 1; i < n; ++i) {
//     chalk[i] += chalk[i - 1];
//     if (chalk[i] > k) {
//       return i;
//     }
//   }

//   k %= chalk[n - 1];
//   return binarySearch(chalk, k);
// };

// const binarySearch = (arr, target) => {
//   let low = 0, high = arr.length - 1;
//   while (low < high) {
//     const mid = Math.floor((high - low) / 2) + low;
//     if (arr[mid] <= target) {
//       low = mid + 1;
//     } else {
//       high = mid;
//     }
//   }
//   return low;
// }

// 作者：LeetCode - Solution
// 链接：https://leetcode-cn.com/problems/find-the-student-that-will-replace-the-chalk/solution/zhao-dao-xu-yao-bu-chong-fen-bi-de-xue-s-qrn1/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。