/**
 * @param {string} s
 * @return {boolean}
 */
export var isValid = function (s) {
  let n = s.length;
  if (n % 2 === 1) {
    return false;
  }
  let map = new Map([
    [')', '('],
    ['}', '{'],
    [']', '['],
  ]);
  let stack = [];
  for (const ch of s) {
    if (map.has(ch)) {
      if (!stack.length || stack.pop() !== map.get(ch)) {
        return false;
      }
      continue;
    }
    stack.push(ch);
  }
  return !stack.length;
};
