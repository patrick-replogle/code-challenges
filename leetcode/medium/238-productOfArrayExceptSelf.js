// Given an array nums of n integers where n > 1,  return an array output such that output[i] is equal to the product of all the elements 
// of nums except nums[i].

// Example:

// Input:  [1,2,3,4]
// Output: [24,12,8,6]
// Constraint: It's guaranteed that the product of the elements of any prefix or suffix of the array (including the whole array) fits in a 32 
// bit integer.

// Note: Please solve it without division and in O(n).

// Follow up:
// Could you solve it with constant space complexity? (The output array does not count as extra space for the purpose of space complexity analysis.)

// first pass brute force solution
var productExceptSelf = function(nums) {
    let result = [];
    
    for (let i = 0; i < nums.length; i++) {
        let curr = 1;  
        for (let j = 0; j < nums.length; j++) {
            if (j === i) continue;
            else curr *= nums[j];
        }
        result.push(curr);
    }
    return result;
};

// optimized approach
var productExceptSelf = function(nums) {
    let result = new Array(nums.length).fill(0);
    let left = new Array(nums.length).fill(0);
    let right = new Array(nums.length).fill(0);
    left[0] = 1;
    right[right.length - 1] = 1;
    
    for (let i = 1; i < nums.length; i++) {
        left[i] = nums[i - 1] * left[i - 1];
    }
    
    for (let i = nums.length - 2; i >= 0; i--) {
        right[i] = nums[i + 1] * right[i + 1];
    }
    
    for (let i = 0; i < nums.length; i++) {
        result[i] = left[i] * right[i];
    }
    
    return result;
};
