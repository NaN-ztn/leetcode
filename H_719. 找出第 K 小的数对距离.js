export var smallestDistancePair = function (nums, k) {
  nums.sort((a, b) => a - b);
  let left = 0,
    right = nums[nums.length - 1] - nums[0];
  while (left <= right) {
    let mid = Math.floor((right + left) / 2);
    let cnt = 0;
    for (let j = 0; j < nums.length; j++) {
      let i = binarySearch(nums, j, nums[j] - mid);
      cnt += j - i;
    }
    if (cnt >= k) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return left;
};
function binarySearch(nums, end, target) {
  let left = 0,
    right = end;
  while (left < right) {
    let mid = Math.floor((right + left) / 2);
    if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return left;
}
