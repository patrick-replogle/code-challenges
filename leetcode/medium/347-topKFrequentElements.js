// Given a non-empty array of integers, return the k most frequent elements.

// Example 1:
// Input: nums = [1,1,1,2,2,3], k = 2
// Output: [1,2]

// Example 2:
// Input: nums = [1], k = 1
// Output: [1]

// first pass solution
var topKFrequent = function(nums, k) {
    let charCount = {};
    let result = [];
    
    for (let num of nums) {
        if (!(num in charCount)) charCount[num] = 0;
        charCount[num] += 1;
    }
    
    let entries = Object.entries(charCount).sort((a, b) => b[1] - a[1]);
    
    for (let i = 0; i < k; i++) {
        result.push(entries[i][0]);
    }
    return result;
};
