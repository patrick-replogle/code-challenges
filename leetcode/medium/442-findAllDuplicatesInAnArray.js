// Given an array of integers, 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.

// Find all the elements that appear twice in this array.

// Could you do it without extra space and in O(n) runtime?

// Example:
// Input:
// [4,3,2,7,8,2,3,1]

// Output:
// [2,3]

// first pass solution using dict to count nums
var findDuplicates = function(nums) {
    let charCount = {};
    let results = [];
    
    for (let num of nums) {
        if (!(num in charCount)) {
            charCount[num] = 0;
        }
        charCount[num] += 1;
    }
    
    for (let key in charCount) {
        if (charCount[key] === 2) {
            results.push(Number(key));
        }
    }
    return results;
};

// second pass by sorting the array => worse time complexity, better space compexity than first pass solution
var findDuplicates = function(nums) {
    let results = [];
    nums.sort((a, b) => a - b);
    
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] === nums[i+1] && nums[i] !== nums[i+2]) {
            results.push(nums[i]);
        }
    }
    return results;
};

