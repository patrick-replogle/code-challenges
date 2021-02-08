/*
You are given an integer array nums. You can choose exactly one index (0-indexed) and remove the element. Notice that the index of 
the elements may change after the removal.

For example, if nums = [6,1,7,4,1]:

Choosing to remove index 1 results in nums = [6,7,4,1].
Choosing to remove index 2 results in nums = [6,1,4,1].
Choosing to remove index 4 results in nums = [6,1,7,4].
An array is fair if the sum of the odd-indexed values equals the sum of the even-indexed values.

Return the number of indices that you could choose such that after the removal, nums is fair.

Example 1:
Input: nums = [2,1,6,4]
Output: 1
Explanation:
Remove index 0: [1,6,4] -> Even sum: 1 + 4 = 5. Odd sum: 6. Not fair.
Remove index 1: [2,6,4] -> Even sum: 2 + 4 = 6. Odd sum: 6. Fair.
Remove index 2: [2,1,4] -> Even sum: 2 + 4 = 6. Odd sum: 1. Not fair.
Remove index 3: [2,1,6] -> Even sum: 2 + 6 = 8. Odd sum: 1. Not fair.
There is 1 index that you can remove to make nums fair.
*/

// first pass solution
var waysToMakeFair = function(nums) {
    let leftEven = new Array(nums.length).fill(0); // even index sum to left of each index
    let leftOdd = new Array(nums.length).fill(0); // odd index sum to left of each index
    let rightEven = new Array(nums.length).fill(0); // even index sum to right of each index
    let rightOdd = new Array(nums.length).fill(0); // odd index sum to right of each index
    let output = 0;
    
    for (let i = 1; i < nums.length; i++) {
        if (i % 2 === 0) {
            leftOdd[i] = nums[i-1] + leftOdd[i-1];
            leftEven[i] = leftEven[i-1];
        } else {
            leftEven[i] = nums[i-1] + leftEven[i-1];
            leftOdd[i] = leftOdd[i - 1];
        }
    }
    
    for (let i = nums.length - 2; i >= 0; i--) {
        if (i % 2 === 0) {
            rightOdd[i] = nums[i+1] + rightOdd[i+1];
            rightEven[i] = rightEven[i+1];
        } else {
            rightEven[i] = nums[i+1] + rightEven[i+1];
            rightOdd[i] = rightOdd[i+1];
        } 
    }
    
    for (let i = 0; i < nums.length; i++) {       
        let sum1 = leftEven[i] + rightOdd[i];
        let sum2 = leftOdd[i] + rightEven[i];
        if (sum1 === sum2) output++;
    }
    return output;
};







