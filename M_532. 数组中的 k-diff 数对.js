/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
export var findPairs = function (nums, k) {
  nums.sort((a, b) => a - b);
  let set = new Set();
  let ans = 0;
  for (let i = 0; i < nums.length; i++) {
    let target = nums[i] + k;
    if (!set.has(target)) {
      let index = binarySearch(nums, i + 1, nums.length, target);
      if (nums[index] === target) {
        ans++;
        set.add(target);
      }
    }
    set.add(nums[i]);
  }
  return ans;
};

function binarySearch(arr, start, end, target) {
  let left = start,
    right = end;
  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] < target) {
      left = mid + 1;
    } else if (arr[mid] === target) {
      return mid;
    } else {
      right = mid;
    }
  }
  return left;
}
