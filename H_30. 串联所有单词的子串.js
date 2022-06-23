/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
export var findSubstring = function (s, words) {
  let sLen = s.length,
    n = words.length,
    wLen = words[0].length;
  let ans = [];
  for (let i = 0; i < wLen; i++) {
    if (i + n * wLen > sLen) {
      break;
    }
    let diff = new Map();
    for (let j = 0; j < n; j++) {
      let word = s.substring(i + wLen * j, i + (j + 1) * wLen);
      diff.set(word, (diff.get(word) || 0) + 1);
    }
    for (let word of words) {
      let cnt = (diff.get(word) || 0) - 1;
      if (cnt === 0) {
        diff.delete(word);
      } else {
        diff.set(word, cnt);
      }
    }
    for (let j = i; j < sLen - n * wLen + 1; j += wLen) {
      if (j !== i) {
        let preWord = s.substring(j - wLen, j);
        let nextWord = s.substring(j + (n - 1) * wLen, j + n * wLen);
        let preCnt = (diff.get(preWord) || 0) - 1;
        if (preCnt === 0) {
          diff.delete(preWord);
        } else {
          diff.set(preWord, preCnt);
        }
        let nextCnt = (diff.get(nextWord) || 0) + 1;
        if (nextCnt === 0) {
          diff.delete(nextWord);
        } else {
          diff.set(nextWord, nextCnt);
        }
      }
      if (diff.size === 0) {
        ans.push(j);
      }
    }
  }
  return ans;
};
