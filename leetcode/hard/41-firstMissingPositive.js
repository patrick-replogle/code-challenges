// Given an unsorted integer array nums, find the smallest missing positive integer.

// Follow up: Could you implement an algorithm that runs in O(n) time and uses constant extra space.?

// Example 1:

// Input: nums = [1,2,0]
// Output: 3
// Example 2:

// Input: nums = [3,4,-1,1]
// Output: 2
// Example 3:

// Input: nums = [7,8,9,11,12]
// Output: 1

// first pass solution
var firstMissingPositive = function(nums) {
    if (nums.length === 0) return 1;
    
    let max = Math.max(...nums);
    if (max <= 0) return 1;
    
    nums = new Set(nums);
    
    for (let i = 1; i <= max + 1; i++) {
        if (!nums.has(i)) return i;
    }
};
