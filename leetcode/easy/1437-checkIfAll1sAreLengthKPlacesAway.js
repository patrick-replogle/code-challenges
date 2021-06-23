/*
Given an array nums of 0s and 1s and an integer k, return True if all 1's are at least k places away from each other, otherwise return False.

Example 1:
Input: nums = [1,0,0,0,1,0,0,1], k = 2
Output: true
Explanation: Each of the 1s are at least 2 places away from each other.

Example 2:
Input: nums = [1,0,0,1,0,1], k = 2
Output: false
Explanation: The second 1 and third 1 are only one apart from each other.
*/

// first pass solution
var kLengthApart = function(nums, k) {
    let prev = nums.indexOf(1);
    
    for (let i = prev + 1; i < nums.length; i++) {
        if (nums[i] === 1 && i - prev <= k) {
            return false;
        } else if (nums[i] === 1) {
            prev = i;
        }
    }
    return true;
};
