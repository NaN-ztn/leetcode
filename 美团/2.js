// const fs = require('fs')
// const lines = fs.readFileSync(0).toString().trim().split(/\r\n|\r|\n/)
// const num = lines[0]
// const w = lines[1].split(' ')
// let ws = []
// ws.push(w)
// const getArr = lines[2].split(' ')
// for (let i = 0; i < num; i++) {
//   let x = getArr[i]
//   for (let j = 0; j < ws.length; j++) {
//     if (ws[j].length >= x) {
//       let newArr = ws[j].splice(x - 1)
//       newArr.shift()
//       if (newArr.length) {
//         ws.splice(j + 1, 0, ['0'], newArr)
//       }
//       else ws.splice(j + 1, 0, ['0'])
//       if (!ws[j].length) ws.splice(j, 1)
//       break
//     }
//     else x -= ws[j].length
//   }
//   console.log(
//     ws.reduce((total, cur, index, ws) => {
//       let sum = 0
//       for (let i = 0; i < cur.length; i++) {
//         sum += +cur[i]
//       }
//       return Math.max(sum, total)
//     }, 0)
//   )
// }

// const fs = require('fs');
// const lines = fs
//   .readFileSync('0.txt')
//   .toString()
//   .trim()
//   .split(/\r\n|\r|\n/);
// const weights = lines[1].split(' ');
// const order = lines[2].split(' ');
// let sum = new Array(weights.length + 1);
// sum[0] = 0;
// for (let i = 1; i < weights.length + 1; i++) {
//   sum[i] = sum[i - 1] + +weights[i - 1];
// }
// let ans = [];
// for (let i = 0; i < order.length; i++) {
//   const cur = order.slice(0, i + 1).sort((a, b) => a - b);
//   let y = -1;
//   let x = +cur[0];
//   let max = 0;
//   for (let j = 0; j <= i; j++) {
//     max = Math.max(sum[x - 1] - sum[y + 1], max);
//     y = x;
//     x = +cur[j + 1];
//   }
//   ans.push(max);
// }
// console.log(ans);


const fs = require('fs')
const lines = fs.readFileSync('0.txt').toString().trim().split(/\r\n|\r|\n/);

const len = Number(lines[0]),
  weightStrArr = lines[1].split(' '),
  takeArr = lines[2].split(' ')
const prev = new Array(len + 1).fill(0), weightNumArr = new Array(len + 1).fill(0)
for (let z = 1; z <= len; z++) {
  weightNumArr[z] = Number(weightStrArr[z - 1])
  prev[z] += prev[z - 1] + weightNumArr[z]
}

const pos = new Array(len + 1).fill('').map(() => new Array(2).fill(-1))
const res = new Array(len).fill(0)
let tempMax = 0

for (let z = len - 1; z >= 0; z--) {
  const index = +takeArr[z]
  res[z] = tempMax
  if (z === 0) break

  let cur = weightNumArr[index]
  // 左边界和右边界，注意如果左右无连通区域则区间为[index, index]，所以初始化为index
  let left = index, right = index

  if (index + 1 <= len && pos[index + 1][0] !== -1) {
    cur += prev[pos[index + 1][1]] - prev[pos[index + 1][0] - 1]
    // 更新右边界
    right = pos[index + 1][1]
  }
  if (index - 1 > 0 && pos[index - 1][1] !== -1) {
    cur += prev[pos[index - 1][1]] - prev[pos[index - 1][0] - 1]
    // 更新左边界
    left = pos[index - 1][0]
  }
  
  tempMax = Math.max(tempMax, cur)
  // 更新两端点的左右区间
  pos[left][0] = left
  pos[left][1] = right
  pos[right][0] = left
  pos[right][1] = right
}

for (let z of res) {
  console.log(z)
}