export var findAndReplacePattern = function (words, pattern) {
  let ans = [];
  for (const word of words) {
    let map = new Map();
    let reverseMap = new Map();
    let i = 0;
    for (; i < word.length; i++) {
      if (map.has(word[i])) {
        let reflect = map.get(word[i]);
        if (reflect === pattern[i]) continue;
        else break;
      } else {
        if (reverseMap.has(pattern[i])) {
          break;
        }
        reverseMap.set(pattern[i], word[i]);
        map.set(word[i], pattern[i]);
      }
    }
    if (i === word.length) {
      ans.push(word);
    }
  }
  return ans;
};
