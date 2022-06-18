/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var licenseKeyFormatting = function (s, k) {
  let cnt = 0
  let res = []
  for (var i = s.length - 1; i >= 0; i--) {
    if (s[i] !== '-') {
      res.push(s[i].toUpperCase())
      cnt++
      if (cnt % k === 0)
        res.push('-')
    }
  }
  if (res.length > 0 && res[res.length - 1] === '-')
    res.pop()
  return res.reverse().join('')
};