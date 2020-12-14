// Given an integer array nums, return the maximum result of nums[i] XOR nums[j], where 0 ≤ i ≤ j < n.

// Follow up: Could you do this in O(n) runtime?

// Example 1:

// Input: nums = [3,10,5,25,2,8]
// Output: 28
// Explanation: The maximum result is 5 XOR 25 = 28.
// Example 2:

// Input: nums = [0]
// Output: 0
// Example 3:

// Input: nums = [2,4]
// Output: 6
// Example 4:

// Input: nums = [8,10,2]
// Output: 10

// first pass brute force approach
var findMaximumXOR = function(nums) {
    let max = 0;
    
    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            max = Math.max(max, nums[i] ^ nums[j]);
        }
    }
    return max;
};
