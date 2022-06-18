/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function (arr) {
  let left = 1, right = arr.length - 2, ans = 0;
  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);
    if (arr[mid] > arr[mid + 1]) {
      ans = mid
      right = mid - 1
    }
    else left = mid + 1
  }
  return ans
};