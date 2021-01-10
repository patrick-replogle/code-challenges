// Given an unsorted array of integers nums, return the length of the longest continuous increasing subsequence (i.e. subarray). The subsequence 
// must be strictly increasing.

// A continuous increasing subsequence is defined by two indices l and r (l < r) such that it is [nums[l], nums[l + 1], ..., nums[r - 1], nums[r]] 
// and for each l <= i < r, nums[i] < nums[i + 1].

// Example 1:

// Input: nums = [1,3,5,4,7]
// Output: 3
// Explanation: The longest continuous increasing subsequence is [1,3,5] with length 3.
// Even though [1,3,5,7] is an increasing subsequence, it is not continuous as elements 5 and 7 are separated by element 4.

// first pass solution
var findLengthOfLCIS = function(nums) {
    if (!nums.length) return 0;
    
    let max = 1
    
    for (let i = 0; i < nums.length - 1; i++) {
        let prev = nums[i];
        let curr = 1;
        let flag = false;
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[j] > prev) {
                prev = nums[j];
                curr++;
                if (j === nums.length - 1) flag = true;
            } else {
                break;
            }
        }
        max = Math.max(curr, max);
        if (flag) break;
    }
    return max;
};

// second pass solution
var findLengthOfLCIS = function(nums) {
    if (!nums.length) return 0;
    if (nums.length === 1) return 1;
    
    let max = 1;
    let prev = nums[0];
    let curr = 1;
    
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > prev) curr++;
        else curr = 1;
        prev = nums[i];
        max = Math.max(curr, max);
    }
    return max;
};
