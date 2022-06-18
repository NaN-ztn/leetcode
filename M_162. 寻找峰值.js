/**
 * @param {number[]} nums
 * @return {number}
 */

//最大值，迭代爬坡

var findPeakElement = function (nums) {
  if (nums.length < 2) return 0;
  let pre = nums.length - 1
  let mid = 0
  let next = 1
  while (mid < nums.length) {
    if (Math.max(nums[mid], nums[pre], nums[next]) === nums[mid]) {
      return mid
    }
    pre = mid
    mid = next
    next = (mid === nums.length - 1) ? 0 : next + 1
  }
};

console.log(findPeakElement([1, 2]))