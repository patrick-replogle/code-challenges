// Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.

// You may assume that the array is non-empty and the majority element always exist in the array.

// Example 1:

// Input: [3,2,3]
// Output: 3
// Example 2:

// Input: [2,2,1,1,1,2,2]
// Output: 2

// first pass solution
var majorityElement = function(nums) {
    let majority = Math.floor(nums.length / 2);
    let numCount = {};
    
    for (let num of nums) {
        if (!(num in numCount)) numCount[num] = 0;
        numCount[num] += 1;     
        if (numCount[num] > majority) return num;
    }
};
