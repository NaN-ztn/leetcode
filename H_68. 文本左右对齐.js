/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */


// 灵活运用 slice 和 join
// 用 blank 方法实现未知个空格的连接 
var fullJustify = function (words, maxWidth) {
  let num = 0, pre = 0
  let ans = ""
  let res = []
  let i = 0
  for (i = 0; i < words.length; i++) {
    num += words[i].length
    if (num > maxWidth) {
      let k = i - pre - 1
      let space = maxWidth - num + words[i].length
      let e = space % k
      let numm = (space - e) / k
      while (numm == 0) {
        num -= words[i].length
        i--
        k = i - pre - 1
        space = maxWidth - num + words[i].length
        e = space % k
        numm = (space - e) / k
      }
      let ss = ""
      for (var j = 0; j < numm; j++) {
        ss += " "
      }
      for (var j = pre; j < i - 1; j++) {
        ans += words[j] + ss
        if (e != 0) {
          ans += " "
          e--
        }
      }
      ans += words[i - 1]
      if (k == 0) {
        for (let x = num - words[i].length; x < maxWidth; x++) {
          ans += " "
        }
      }
      res.push(ans)
      pre = i
      ans = ""
      num = words[i].length
    }
  }
  let k = i - pre - 1
  let space = maxWidth - num
  let e = space % k
  let numm = (space - e) / k
  let flag = false
  while (numm == 0) {
    flag = true
    num -= words[--i].length
    k = i - pre - 1
    space = maxWidth - num
    e = space % k
    numm = (space - e) / k
  }
  if (flag) {
    let ss = ""
    for (var j = 0; j < numm; j++) {
      ss += " "
    }
    for (var j = pre; j < i - 1; j++) {
      ans += words[j] + ss
      if (e != 0) {
        ans += " "
        e--
      }
    }
    ans += words[i - 1]
    if (k == 0) {
      for (let x = num - words[i - 1].length; x < maxWidth; x++) {
        ans += " "
      }
    }
    res.push(ans)
    pre = i
    ans = ""
    num = words[i].length
    i++
  }
  space = maxWidth - num
  let ss = ""
  for (var j = 0; j < space - i + pre + 1; j++) {
    ss += " "
  }
  for (var j = pre; j < i - 1; j++) {
    ans += words[j] + " "
  }
  ans += words[i - 1] + ss
  res.push(ans)
  return res
};
let arr = fullJustify(["Listen", "to", "many,", "speak", "to", "a", "few."], 6)
for (const i of arr) {
  console.log(i)
}


// const fullJustify = (words, maxWidth) => {
//   const ans = [];
//   let right = 0, n = words.length;
//   while (true) {
//     const left = right; // 当前行的第一个单词在 words 的位置
//     let sumLen = 0; // 统计这一行单词长度之和
//     while (right < n && sumLen + words[right].length + right - left <= maxWidth) {
//       sumLen += words[right].length;
//       right++;
//     }

//     // 当前行是最后一行：单词左对齐，且单词之间应只有一个空格，在行末填充剩余空格
//     if (right === n) {
//       const s = words.slice(left).join(' ');
//       ans.push(s + blank(maxWidth - s.length));
//       break;
//     }
//     const numWords = right - left;
//     const numSpaces = maxWidth - sumLen;

//     // 当前行只有一个单词：该单词左对齐，在行末填充空格
//     if (numWords === 1) {
//       ans.push(words[left] + blank(numSpaces));
//       continue;
//     }

//     // 当前行不只一个单词
//     const avgSpaces = Math.floor(numSpaces / (numWords - 1));
//     const extraSpaces = numSpaces % (numWords - 1);
//     const s1 = words.slice(left, left + extraSpaces + 1).join(blank(avgSpaces + 1)); // 拼接额外加一个空格的单词
//     const s2 = words.slice(left + extraSpaces + 1, right).join(blank(avgSpaces)); // 拼接其余单词
//     ans.push(s1 + blank(avgSpaces) + s2);
//   }
//   return ans;
// }

// const blank = (n) => {
//   return new Array(n).fill(' ').join('');
// }

// 作者：LeetCode - Solution
// 链接：https://leetcode-cn.com/problems/text-justification/solution/wen-ben-zuo-you-dui-qi-by-leetcode-solut-dyeg/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。