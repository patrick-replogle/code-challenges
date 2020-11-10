// Given an array of integers nums sorted in ascending order, find the starting and ending position of a given target value.

// If target is not found in the array, return [-1, -1].

// Follow up: Could you write an algorithm with O(log n) runtime complexity?

// Example 1:

// Input: nums = [5,7,7,8,8,10], target = 8
// Output: [3,4]
// Example 2:

// Input: nums = [5,7,7,8,8,10], target = 6
// Output: [-1,-1]

var searchRange = function(nums, target) {
    let low = 0;
    let high = nums.length - 1;
    
    while (low <= high) {

        let mid = Math.floor((low + high) / 2);
        
        if(nums[mid] === target) {
            low = mid;
            high = mid;

            while (nums[low - 1] == target && low >= 0) {
              low--;
            }

            while (nums[high + 1] == target && high <= nums.length - 1) {
              high++;
            }
            return [low, high]           
        }
        
        else if (target < nums[mid]) {
            high = mid - 1;
        } else {
            low = mid + 1
        }
    }
    return [-1, -1];
};
