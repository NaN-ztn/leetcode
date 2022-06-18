/**
 * @param {string} s
 * @param {string[]} dictionary
 * @return {string}
 */
var findLongestWord = function (s, dictionary) {
  let res = ''
  for (const str of dictionary) {
    let i = 0, j = 0
    while (j < str.length && i < s.length) {
      if (s[i] === str[j])
        j++
      i++
    }
    if (j === str.length) {
      if (res.length < str.length || (res.length === str.length && res > str))
        res = str
    }
  }
  return res
};