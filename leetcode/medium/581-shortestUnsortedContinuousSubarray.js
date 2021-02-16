/*
Given an integer array nums, you need to find one continuous subarray that if you only sort this subarray in ascending order, 
then the whole array will be sorted in ascending order.

Return the shortest such subarray and output its length.

Example 1:
Input: nums = [2,6,4,8,10,9,15]
Output: 5
Explanation: You need to sort [6, 4, 8, 10, 9] in ascending order to make the whole array sorted in ascending order.

Example 2:
Input: nums = [1,2,3,4]
Output: 0
*/

// first pass solution: create a copy of the arr and sort it to determine where the range of indices differ from the original
var findUnsortedSubarray = function(nums) {
    let copy = [...nums].sort((a, b) => a - b);
    let left = 0;
    let right = nums.length - 1;
    
    while (left < nums.length && copy[left] === nums[left]) { 
        left++;
        if (left === nums.length) return 0;
    }
    
    while (right >= 0 && copy[right] === nums[right]) { 
        right--; 
        if (right < 0) return 0;
    }
    return right - left + 1;
};

// second pass solution
var findUnsortedSubarray = function(nums) {
    let copy = [...nums].sort((a, b) => a - b);
    let left = 0;
    let right = nums.length - 1;
    
    while (left < nums.length && right >= 0) { 
        let flag = false;
        if (copy[left] === nums[left]) {
            left++;
            flag = true;
        }
        if (copy[right] === nums[right]) {
            right--;
            flag = true;
        }
        if (left === right || left === nums.length || right < 0) return 0;
        else if (!flag) break;
    }
    return right - left + 1;
};
