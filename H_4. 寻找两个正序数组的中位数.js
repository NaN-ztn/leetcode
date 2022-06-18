/* 二分法实现，只适用于递增数组，用二分法划分数组，确定两个数组划分后左右格式，根据划分线的左右共四个值，再根据总个数的奇数偶数就来确定中位数的计算方式。将两个数组看作整体，只需要对划分线的左右四个值做计算，难点在于对划分线的确定，必须在交叉范围内。 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  let m = nums1.length;
  let n = nums2.length;
  if (m > n) {
    [nums1, nums2] = [nums2, nums1];
    [m, n] = [n, m];
  }
  let totalLeft = Math.floor((m + n + 1) / 2);
  let left = 0,
    right = m;
  while (left < right) {
    let i = Math.floor((left + right + 1) / 2);
    let j = totalLeft - i;
    if (nums1[i - 1] > nums2[j]) {
      right = i - 1;
    } else {
      left = i;
    }
  }
  let i = left;
  let j = totalLeft - left;
  let nums1Left = i === 0 ? Number.MIN_SAFE_INTEGER : nums1[i - 1];
  let nums1Right = i === m ? Number.MAX_SAFE_INTEGER : nums1[i];

  let nums2Left = j === 0 ? Number.MIN_SAFE_INTEGER : nums2[j - 1];
  let nums2Right = j === n ? Number.MAX_SAFE_INTEGER : nums2[j];
  if ((m + n) % 2 === 1) {
    return Math.max(nums1Left, nums2Left);
  } else {
    return (Math.max(nums1Left, nums2Left) + Math.min(nums1Right, nums2Right)) / 2;
  }
};
