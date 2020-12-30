// Given an array nums of n integers and an integer target, find three integers in nums such that the sum is closest to target. Return the sum 
// of the three integers. You may assume that each input would have exactly one solution.

// Example 1:

// Input: nums = [-1,2,1,-4], target = 1
// Output: 2
// Explanation: The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).

// first solution using two pointers
var threeSumClosest = function(nums, target) {
    nums.sort((a, b) => a - b);
    
    let result = Infinity;
    let minDiff = Infinity;
    
    for (let i = 0; i < nums.length; i++) {
        let left = i + 1;
        let right = nums.length - 1;
        
        while (left < right) {
            let sum = nums[i] + nums[left] + nums[right];
            let difference = Math.abs(target - sum);
            
            if (difference < minDiff) {
                minDiff = difference;
                result = sum;
            }
            if (sum < target) left++;
            else right--;
        }
    }
    return result;
};
