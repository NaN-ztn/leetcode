/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function (arr) {
  let sortedArr = arr.sort((a, b) => a - b);
  let ans = [[sortedArr[0], sortedArr[1]]];
  let minAbs = sortedArr[1] - sortedArr[0];
  for (let i = 1; i < arr.length - 1; i++) {
    let abs = sortedArr[i + 1] - sortedArr[i];
    if (abs < minAbs) {
      minAbs = abs;
      ans = [[sortedArr[i], sortedArr[i + 1]]];
    } else if (abs === minAbs) {
      ans.push([sortedArr[i], sortedArr[i + 1]]);
    }
  }
  return ans;
};
