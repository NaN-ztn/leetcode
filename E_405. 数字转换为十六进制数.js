/**
 * @param {number} num
 * @return {string}
 */
var toHex = function (num) {
  return num.toString(16)
};


// 位运算 有负数
// var toHex = function (num) {
//   if (num === 0) {
//     return "0";
//   }
//   const sb = [];
//   for (let i = 7; i >= 0; i--) {
//     const val = (num >> (4 * i)) & 0xf;
//     if (sb.length > 0 || val > 0) {
//       const digit = val < 10 ? String.fromCharCode('0'.charCodeAt() + val) : String.fromCharCode('a'.charCodeAt() + val - 10);
//       sb.push(digit);
//     }
//   }
//   return sb.join('');
// }

// 作者：LeetCode - Solution
// 链接：https://leetcode-cn.com/problems/convert-a-number-to-hexadecimal/solution/shu-zi-zhuan-huan-wei-shi-liu-jin-zhi-sh-2srt/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。