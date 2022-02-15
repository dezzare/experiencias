// https://leetcode.com/problems/search-insert-position/submissions/

var searchInsert = function(nums, target) {
    for (let i = 0; i < nums.length; i++){
        if (target <= nums[i]){
        return i
        }
    }
    return nums.length
}

//Runtime: 43 ms, faster than 99.99% of JavaScript online submissions for Search Insert Position.
//Memory Usage: 42.4 MB, less than 14.02% of JavaScript online submissions for Search Insert Position.
