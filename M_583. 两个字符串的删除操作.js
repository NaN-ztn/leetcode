/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
  const m = word1.length
  const n = word2.length
  let dp = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0))
  for (let i = 1; i < m + 1; i++) {
    const char1 = word1[i - 1]
    for (let j = 1; j < n + 1; j++) {
      const char2 = word2[j - 1]
      if (char1 === char2) dp[i][j] = dp[i - 1][j - 1] + 1
      else dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])
    }
  }
  const max = dp[m][n]
  return n - max + m - max
};
