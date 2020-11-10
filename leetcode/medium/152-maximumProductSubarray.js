// Given an integer array nums, find the contiguous subarray within an array (containing at least one number) which has the largest product.

// Example 1:

// Input: [2,3,-2,4]
// Output: 6
// Explanation: [2,3] has the largest product 6.
// Example 2:

// Input: [-2,0,-1]
// Output: 0
// Explanation: The result cannot be 2, because [-2,-1] is not a subarray.

// first pass brute force solution
var maxProduct = function(nums) {
    let max = -Infinity;
    
    for (let i = 0; i < nums.length; i++) {
        let currProduct = 1;
        for (let j = i; j < nums.length; j++) {
            currProduct = currProduct * nums[j];
            max = Math.max(max, currProduct);
        }
    }
    return max;
};

// optimized approach
var maxProduct = function(nums) {
    let max = nums[0];
    let currMin = nums[0];
    let currMax = nums[0];
    
    for (let i = 1; i < nums.length; i++) {
        let curr = nums[i];
        let tempMax = Math.max(curr, currMax * curr, currMin * curr);
        
        currMin = Math.min(curr, currMax * curr, currMin * curr);
        currMax = tempMax;
        max = Math.max(max, currMax);
    }
    return max;
};
