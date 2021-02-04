/*
Given an array of integers nums.

A pair (i,j) is called good if nums[i] == nums[j] and i < j.

Return the number of good pairs.

Example 1:
Input: nums = [1,2,3,1,1,3]
Output: 4
Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.

Example 2:
Input: nums = [1,1,1,1]
Output: 6
Explanation: Each pair in the array are good.
*/

// first pass solution
var numIdenticalPairs = function(nums) {
    let count = 0;
    
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] === nums[j] && i < j) {
                count++;
            }
        }
    }
    return count;
};

// optimized solution
var numIdenticalPairs = function(nums) {
    let dict = {};
    let count = 0;
    
    for (let i = 0; i < nums.length; i++) {
        dict[nums[i]] ? dict[nums[i]] += 1 : dict[nums[i]] = 1;
    }
    
    for (let n of Object.values(dict)) {
        count += Math.floor(n *(n - 1) / 2)
    }
    
    return count;
};
