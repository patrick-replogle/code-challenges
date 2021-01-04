// Given an integer array nums, return the number of range sums that lie in [lower, upper] inclusive.
// Range sum S(i, j) is defined as the sum of the elements in nums between indices i and j (i ≤ j), inclusive.

// Note:
// A naive algorithm of O(n2) is trivial. You MUST do better than that.

// Example:

// Input: nums = [-2,5,-1], lower = -2, upper = 2,
// Output: 3 
// Explanation: The three ranges are : [0,0], [2,2], [0,2] and their respective sums are: -2, -1, 2.

// first pass naive solution
var countRangeSum = function(nums, lower, upper) {
    let count = 0;
    
    for (let i = 0; i < nums.length; i++) {
        let curr = 0;
        let j = i;
        
        while (j < nums.length) {
            curr += nums[j];
            j++;
            if (curr >= lower && curr <= upper) count++;
        }
    }
    return count;
};
