// Given an array consisting of n integers, find the contiguous subarray of given length k that has the maximum average value. And you 
// need to output the maximum average value.

// Example 1:

// Input: [1,12,-5,-6,50,3], k = 4
// Output: 12.75
// Explanation: Maximum average is (12-5-6+50)/4 = 51/4 = 12.75

// first pass solution
var findMaxAverage = function(nums, k) {
    let max = -Infinity;
    
    for (let i = 0; i <= nums.length - k; i++) {
        let sum = 0;
        for (let j = i; j < i + k; j++) {
            sum += nums[j];
        }
        max = Math.max(max, sum / k);
    }
    return max;
};

// second pass sliding window solution
var findMaxAverage = function(nums, k) {
    let sum = 0;
    
    for (let i = 0; i < k; i++) {
        sum += nums[i];
    }
    
    let max = Math.max(sum / k);
    let j = 0;
    
    for (let i = k; i < nums.length; i++) {
        sum -= nums[j];
        sum += nums[i];
        max = Math.max(max, sum / k);
        j++;
    }
    return max;
};
