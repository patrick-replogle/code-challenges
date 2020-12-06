// Given an array nums of n integers and an integer target, are there elements a, b, c, and d in nums such that a + b + c + d = target? 
// Find all unique quadruplets in the array which gives the sum of target.

// Notice that the solution set must not contain duplicate quadruplets.

// Example 1:

// Input: nums = [1,0,-1,0,-2,2], target = 0
// Output: [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
// Example 2:

// Input: nums = [], target = 0
// Output: []

// first pass brute force solution
var fourSum = function(nums, target) {
    let results = [];
    let seen = new Set();
    nums.sort((a, b) => a - b);
    
    for (let i = 0; i < nums.length - 3; i++) {
        for (let j = i + 1; j < nums.length - 2; j++) {
            for (let k = j + 1; k < nums.length - 1; k++) {
                for (let m = k + 1; m < nums.length; m++) {
                    let sum = nums[i] + nums[j] + nums[k] + nums[m];
                    if (sum === target) {
                        let arr = [nums[i], nums[j], nums[k], nums[m]]
                        if (!seen.has(arr.join(" "))) {
                            results.push(arr);
                            seen.add(arr.join(" "));
                        }
                    }
                }
            }
        }
    }
    return results;
};
