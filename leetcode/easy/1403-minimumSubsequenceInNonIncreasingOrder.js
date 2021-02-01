/*
Given the array nums, obtain a subsequence of the array whose sum of elements is strictly greater than the sum of the non 
included elements in such subsequence. 

If there are multiple solutions, return the subsequence with minimum size and if there still exist multiple solutions, return 
the subsequence with the maximum total sum of all its elements. A subsequence of an array can be obtained by erasing some (possibly zero) 
elements from the array. 

Note that the solution with the given constraints is guaranteed to be unique. Also return the answer sorted in non-increasing order.

Example 1:
Input: nums = [4,3,10,9,8]
Output: [10,9] 
Explanation: The subsequences [10,9] and [10,8] are minimal such that the sum of their elements is strictly greater than the sum of
elements not included, however, the subsequence [10,9] has the maximum total sum of its elements.
*/

// first pass solution
var minSubsequence = function(nums) {
    let sum = nums.reduce((acc, el) => acc + el);
    let output = [];
    let currSum = 0;
    
    nums.sort((a, b) => a - b);
    
    for (let i = nums.length - 1; i >= 0; i--) {
        currSum += nums[i];
        output.push(nums[i]);
        
        if (currSum > (sum - currSum)) {
            return output;
        }
    }
    return output;
};
