// Given an array of n positive integers and a positive integer s, find the minimal length of a contiguous subarray of which the sum ≥ s. If 
// there isn't one, return 0 instead.

// Example: 

// Input: s = 7, nums = [2,3,1,2,4,3]
// Output: 2
// Explanation: the subarray [4,3] has the minimal length under the problem constraint.

// first pass brute force solution
var minSubArrayLen = function(s, nums) {
    if (nums.indexOf(s) > -1) return 1;
    
    let output = Infinity;
    
    for (let i = 0; i < nums.length; i++) {
        let currSum = 0;
        let currLen = 0;
        for (let j = i; j < nums.length; j++) {
            currSum += nums[j];
            currLen++;
            if (currSum >= s) {
                output = Math.min(output, currLen)
                break;
            }
        }
    }
    return output === Infinity ? 0 : output;
};

// second pass solution using optimized approach
var minSubArrayLen = function(s, nums) {
    if (nums.indexOf(s) > -1) return 1;
    
    let output = Infinity;
    let currSum = 0;
    let j = 0;
    
    for (let i = 0; i < nums.length; i++) {
        currSum += nums[i];
        
        while (currSum >= s) {
            currSum -= nums[j];
            output = Math.min(output, i - j + 1);
            j++;
        }
    }
    return output === Infinity ? 0 : output;
};

