// A peak element is an element that is strictly greater than its neighbors.

// Given an integer array nums, find a peak element, and return its index. If the array contains multiple peaks, return the index to any of the peaks.

// You may imagine that nums[-1] = nums[n] = -∞.

// Example 1:

// Input: nums = [1,2,3,1]
// Output: 2
// Explanation: 3 is a peak element and your function should return the index number 2.
// Example 2:

// Input: nums = [1,2,1,3,5,6,4]
// Output: 5
// Explanation: Your function can return either index number 1 where the peak element is 2, or index number 5 where the peak element is 6.

// first pass linear search solution
var findPeakElement = function(nums) {
    if (nums.length === 1) return 0;
    
    for (let i = 0; i < nums.length; i++) {
        if (i === 0 && nums[i] > nums[i+1]) {
            return i
        } else if (i > 0 && i < nums.length - 1 && 
            nums[i] > nums[i-1] && nums[i] > nums[i+1]) {
            return i;
        } else if (i === nums.length - 1 && nums[i] > nums[i-1]) {
            return i;
        }
    }
    return -1;
};

// second pass solution using binary search
var findPeakElement = function(nums) {
    let low = 0;
    let high = nums.length - 1;
    
    while (low <  high) {
        let mid = Math.floor((low + high) / 2);
        
        if (nums[mid] > nums[mid - 1] && nums[mid] > nums[mid + 1]) {
            return mid;
        } else if (nums[mid] < nums[mid + 1]){
            low = mid + 1;
        } else if (nums[mid] > nums[mid + 1]){
            high = mid - 1;
        }
    }
    return low;
};
