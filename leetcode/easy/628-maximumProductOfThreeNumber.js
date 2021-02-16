/*
Given an integer array nums, find three numbers whose product is maximum and return the maximum product.

Example 1:
Input: nums = [1,2,3]
Output: 6

Example 2:
Input: nums = [1,2,3,4]
Output: 24

Example 3:
Input: nums = [-1,-2,-3]
Output: -6
*/

// first pass solution
var maximumProduct = function(nums) {
    let len = nums.length;
    nums.sort((a, b) => a - b);
    
    let negative = nums[0] * nums[1] * nums[len - 1];
    let positive = nums[len - 3] * nums[len - 2] * nums[len - 1];
    
    return Math.max(negative, positive);
};
