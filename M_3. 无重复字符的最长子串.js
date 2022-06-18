/**
 * @param {string} s
 * @return {number}
 */
export var lengthOfLongestSubstring = function (s) {
  let ans = 0;
  let map = {};
  let i = 0,
    j = 0;
  for (; j < s.length; j++) {
    let pos = map[s[j]] ?? -1;
    if (pos >= i) {
      ans = Math.max(j - i, ans);
      i = pos + 1;
    }
    map[s[j]] = j;
  }
  return Math.max(ans, j - i);
};
