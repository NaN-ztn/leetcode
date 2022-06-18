export var minFlipsMonoIncr = function (s) {
  let dp0 = s[0] === '1' ? 1 : 0;
  let dp1 = s[0] === '1' ? 0 : 1;
  for (let i = 1; i < s.length; i++) {
    const dp0New = dp0 + (s[i] === '1' ? 1 : 0);
    const dp1New = Math.min(dp1 + (s[i] === '1' ? 0 : 1), dp0 + (s[i] === '1' ? 0 : 1));
    dp0 = dp0New;
    dp1 = dp1New;
  }
  return Math.min(dp0, dp1);
};
