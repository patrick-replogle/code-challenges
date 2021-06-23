/*
You are given a sorted array consisting of only integers where every element appears exactly twice, except for one element which 
appears exactly once. Find this single element that appears only once.

Follow up: Your solution should run in O(log n) time and O(1) space.

Example 1:
Input: nums = [1,1,2,3,3,4,4,8,8]
Output: 2

Example 2:
Input: nums = [3,3,7,7,10,11,11]
Output: 10
*/

// first pass solution => element will always be an even index so only check those
var singleNonDuplicate = function(nums) {
    for (let i = 0; i < nums.length; i += 2) {
        if (nums[i-1] !== nums[i] && nums[i+1] !== nums[i]) {
            return nums[i];
        }
    }
};
