/**
 * @param {string[]} strs
 * @return {number}
 */
export var findLUSlength = function (strs) {
  let len = strs.length;
  let ans = -1;
  for (let i = 0; i < len; i++) {
    let check = true;
    for (let j = 0; j < len; j++) {
      if (i !== j && isSubSeq(strs[i], strs[j])) {
        check = false;
        break;
      }
    }
    if (check) {
      ans = Math.max(ans, strs[i].length);
    }
  }
  return ans;
};

function isSubSeq(str1, str2) {
  let h1 = 0,
    h2 = 0;
  while (h1 < str1.length && h2 < str2.length) {
    if (str1[h1] === str2[h2]) {
      h1++;
    }
    h2++;
  }
  return h1 === str1.length;
}
