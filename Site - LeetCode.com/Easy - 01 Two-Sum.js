//Problem #1 - Two Sum
//https://leetcode.com/problems/two-sum
var twoSum = function(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target)
        return [i, j]
    }
  }
}

// Runtime: 104 ms, faster than 56.59 % of JavaScript online submissions
// for Two Sum.
// Memory Usage: 39.8 MB, less than 61.84 % of JavaScript online submissions
// for Two Sum.
