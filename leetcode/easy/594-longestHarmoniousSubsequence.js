// We define a harmonious array as an array where the difference between its maximum value and its minimum value is exactly 1.

// Given an integer array nums, return the length of its longest harmonious subsequence among all its possible subsequences.

// A subsequence of array is a sequence that can be derived from the array by deleting some or no elements without changing the order of the remaining elements.

// Example 1:

// Input: nums = [1,3,2,2,5,2,3,7]
// Output: 5
// Explanation: The longest harmonious subsequence is [3,2,2,2,3].
// Example 2:

// Input: nums = [1,2,3,4]
// Output: 2
// Example 3:

// Input: nums = [1,1,1,1]
// Output: 0

// first pass brute force solution 
var findLHS = function(nums) {
    if (nums.length <= 1) return 0;
    
    let output = 0;
    
    for (let i = 0; i < nums.length; i++) {
        let count = 1;
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[j] === nums[i] || nums[j] + 1 === nums[i]) count++;
        }
        if (count > 1) output = Math.max(output, count);
    }
    
    return output;
};

// second pass solution using linear time and space complexity
var findLHS = function(nums) {
    if (nums.length <= 1) return 0;
    
    let dict = {};
    let output = 0;
    
    for (let num of nums) {
        dict[num] ? dict[num] += 1 : dict[num] = 1;
    }
    
    for (let num of nums) {
        if (num + 1 in dict) {
            output = Math.max(output, dict[num] + dict[num + 1]);
        }
    }
    
    return output;
};
