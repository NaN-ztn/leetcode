/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumberOfLIS = function (nums) {
  let max = 0, res = 0
  let dp = new Array(nums.length).fill(0)
  let cnt = new Array(nums.length).fill(0)
  for (let i = 0; i < nums.length; i++) {
    dp[i] = 1
    cnt[i] = 1
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        if (dp[j] + 1 > dp[i]) {
          dp[i] = dp[j] + 1
          cnt[i] = cnt[j]
        }
        else if (dp[j] + 1 === dp[i]) {
          cnt[i] += cnt[j]
        }
      }
    }
    if (max < dp[i]) {
      max = dp[i]
      res = cnt[i]
    }
    else if (max === dp[i]) {
      res += cnt[i]
    }
  }
  return ans
};    