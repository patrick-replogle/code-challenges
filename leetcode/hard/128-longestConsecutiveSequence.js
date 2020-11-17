// Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

// Follow up: Could you implement the O(n) solution? 

// Example 1:

// Input: nums = [100,4,200,1,3,2]
// Output: 4
// Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
// Example 2:

// Input: nums = [0,3,7,2,5,8,4,6,0,1]
// Output: 9

// first pass o(n) solution
var longestConsecutive = function(nums) {   
    let set = new Set(nums);
    
    if (set.size <= 1) return set.size;
    
    let arr = Array.from(set).sort((a, b) => a - b);
    let curr = 1;
    let max = -Infinity;
    
    for (let i = 1; i < arr.length; i++) {
        if (arr[i-1] + 1 === arr[i]) {
            curr++;
        } else {
            curr = 1;
        }
        max = Math.max(max, curr);
    }
    return max;
};
