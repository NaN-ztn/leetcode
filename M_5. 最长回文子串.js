// 中心扩散
/**
 * @param {string} s
 * @return {string}
 */
// var longestPalindrome = function (s) {
//   let maxLen = 1;
//   let begin = 0;
//   for (let i = 0; i < s.length; i++) {
//     let evenLen = extendMid(s, i, i + 1);
//     let oddLen = extendMid(s, i, i);
//     let curMax = Math.max(evenLen, oddLen);
//     if (maxLen < curMax) {
//       begin = i - Math.floor((curMax - 1) / 2);
//       maxLen = curMax;
//     }
//   }
//   return s.substring(begin, begin + maxLen);
// };
// function extendMid(str, i, j) {
//   while (i >= 0 && j < str.length) {
//     if (str[i] === str[j]) {
//       i--;
//       j++;
//     } else break;
//   }
//   return j - i - 1;
// }

var longestPalindrome = function (s) {
  let len = s.length;
  let maxLen = 1,
    begin = 0;
  let dp = new Array(len).fill(0).map(() => new Array(len).fill(false));
  for (let i = 0; i < len; i++) {
    dp[i][i] = true;
  }
  for (let j = 0; j < len; j++) {
    for (let i = 0; i < j; i++) {
      if (s[j] === s[i]) {
        if (j - i < 3) {
          dp[i][j] = true;
        } else dp[i][j] = dp[i + 1][j - 1];
      }
      if (dp[i][j] && j - i + 1 > maxLen) {
        maxLen = j - i + 1;
        begin = i;
      }
    }
  }
  return s.substring(begin, begin + maxLen);
};
