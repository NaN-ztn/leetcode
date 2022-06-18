/**
 * @param {string} s
 * @return {boolean}
 */
// 栈
var checkValidString = function (s) {
  let l = [], x = []
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') l.push(i);
    else if (s[i] === ')') {
      if (l.length) l.pop()
      else if (x.length) x.pop()
      else return false
    }
    else x.push(i)
  }
  while (l.length && x.length) {
    let index1 = l.pop()
    let index2 = x.pop()
    if (index1 > index2) return false
  }
  return l.length === 0;
};

//  动态规划dp[n][m]表示下标为 n~m 的字串是否为有效的括号字符串
// var checkValidString = function (s) {
//   const n = s.length;
//   const dp = new Array(n).fill(0).map(() => new Array(n).fill(false));
//   for (let i = 0; i < n; i++) {
//     if (s[i] === '*') {
//       dp[i][i] = true;
//     }
//   }
//   for (let i = 1; i < n; i++) {
//     const c1 = s[i - 1], c2 = s[i];
//     dp[i - 1][i] = (c1 === '(' || c1 === '*') && (c2 === ')' || c2 === '*');
//   }
//   for (let i = n - 3; i >= 0; i--) {
//     const c1 = s[i];
//     for (let j = i + 2; j < n; j++) {
//       const c2 = s[j];
//       if ((c1 === '(' || c1 === '*') && (c2 === ')' || c2 === '*')) {
//         dp[i][j] = dp[i + 1][j - 1];
//       }
//       for (let k = i; k < j && !dp[i][j]; k++) {
//         dp[i][j] = dp[i][k] && dp[k + 1][j];
//       }
//     }
//   }
//   return dp[0][n - 1];
// };

// 作者：LeetCode - Solution
// 链接：https://leetcode-cn.com/problems/valid-parenthesis-string/solution/you-xiao-de-gua-hao-zi-fu-chuan-by-leetc-osi3/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。


console.log(checkValidString("(*))"))
