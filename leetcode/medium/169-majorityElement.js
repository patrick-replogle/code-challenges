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
    let n = Math.floor(nums.length / 2)
    let dict = {};
    
    for (let num of nums) {
        if (!(num in dict)) {
            dict[num] = 0;
        }
        dict[num] += 1;
        
        if (dict[num] > n) {
            return num;
        }
    }
    return -1;
};
