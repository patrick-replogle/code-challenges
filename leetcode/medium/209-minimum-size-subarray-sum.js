// 209: Minimum Size Subarray Sum


// Given an array of n positive integers and a positive integer s, find the minimal length of a contiguous subarray of which the sum ≥ s. If there isn't one, return 0 instead.

// Example: 

// Input: s = 7, nums = [2,3,1,2,4,3]
// Output: 2
// Explanation: the subarray [4,3] has the minimal length under the problem constraint.
// Follow up:
// If you have figured out the O(n) solution, try coding another solution of which the time complexity is O(n log n). 

/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(s, nums) {
    if (nums.indexOf(s) > -1) return 1;
    
    let minLen = Infinity;
    let currSum = 0;
    let j = 0
    
    for (let i = 0; i < nums.length; i++) {
        currSum += nums[i];
        
        while (currSum >= s) {
            minLen = Math.min(minLen, i - j + 1);
            currSum -= nums[j];
            j++;
        }
    }
    return minLen !== Infinity ? minLen : 0;
};