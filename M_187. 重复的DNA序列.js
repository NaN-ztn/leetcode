/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function (s) {
  let L = 10
  let ans = []
  let map = new Map();
  for (var i = 0; i <= s.length - L; i++) {
    let substr = s.slice(i, i + L)
    let n = (map.get(substr) || 0) + 1
    map.set(substr, n)
    if (n === 2)
      ans.push(substr)
  }
  return ans
};



// 哈希表 + 滑动窗口 + 位运算
// s 中只含有 44 种字符，我们可以将每个字符用 22 个比特表示
// 滑动窗口向右移动一位：x = x << 2，由于每个字符用 22 个比特表示，所以要左移 22 位；
// 一个新的字符 ch 进入窗口：x = x | bin[ch]，这里 bin[ch] 为字符 ch 的对应二进制；
// 窗口最左边的字符离开窗口：x = x & ((1 << 20) - 1)，由于我们只考虑 x 的低 20 位比特，需要将其余位置零，即与上(1 << 20) - 1。



// var findRepeatedDnaSequences = function (s) {
//   const L = 10;
//   const bin = new Map();
//   bin.set('A', 0);
//   bin.set('C', 1);
//   bin.set('G', 2);
//   bin.set('T', 3);

//   const ans = [];
//   const n = s.length;
//   if (n <= L) {
//     return ans;
//   }
//   let x = 0;
//   for (let i = 0; i < L - 1; ++i) {
//     x = (x << 2) | bin.get(s[i]);
//   }
//   const cnt = new Map();
//   for (let i = 0; i <= n - L; ++i) {
//     x = ((x << 2) | bin.get(s[i + L - 1])) & ((1 << (L * 2)) - 1);
//     cnt.set(x, (cnt.get(x) || 0) + 1);
//     if (cnt.get(x) === 2) {
//       ans.push(s.slice(i, i + L));
//     }
//   }
//   return ans;
// };

// 作者：LeetCode - Solution
// 链接：https://leetcode-cn.com/problems/repeated-dna-sequences/solution/zhong-fu-de-dnaxu-lie-by-leetcode-soluti-z8zn/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。