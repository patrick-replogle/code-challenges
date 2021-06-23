// Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.

// There is only one duplicate number in nums, return this duplicate number.

// Follow-ups:

// How can we prove that at least one duplicate number must exist in nums? 
// Can you solve the problem without modifying the array nums?
// Can you solve the problem using only constant, O(1) extra space?
// Can you solve the problem with runtime complexity less than O(n2)?
 
// Example 1:

// Input: nums = [1,3,4,2,2]
// Output: 2
// Example 2:

// Input: nums = [3,1,3,4,2]
// Output: 3
// Example 3:

// Input: nums = [1,1]
// Output: 1

// first pass solution utilizing the sort method 
var findDuplicate = function(nums) {
    nums.sort((a, b) => a - b);
    
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] === nums[i + 1]) return nums[i];
    }
};

// second pass solution using a set to find duplicate number
var findDuplicate = function(nums) {
    let seen = new Set();
    
    for(let num of nums) {
        if (seen.has(num)) return num;
        seen.add(num);
    }
    return -1;
};

