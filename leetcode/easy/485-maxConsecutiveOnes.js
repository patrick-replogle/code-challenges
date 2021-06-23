// Given a binary array, find the maximum number of consecutive 1s in this array.

// Example 1:
// Input: [1,1,0,1,1,1]
// Output: 3
// Explanation: The first two digits or the last three digits are consecutive 1s.
//     The maximum number of consecutive 1s is 3.

// first pass solution
var findMaxConsecutiveOnes = function(nums) {
    let max = 0;
    let curr = 0;
    
    for (let num of nums) {
        if (num === 0) {
            curr = 0;   
        } else {
            curr++;
            max = Math.max(max, curr)
        }
    }
    return max;
};

// second pass solution
var findMaxConsecutiveOnes = function(nums) {
    nums = nums.join("").split("0");
    let max = 0;
    
    for (let str of nums) {
        max = Math.max(max, str.length);
    }
    return max;
};
