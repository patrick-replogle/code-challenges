// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

// Follow up: Could you implement a solution with a linear runtime complexity and without using extra memory?

// Example 1:

// Input: nums = [2,2,1]
// Output: 1
// Example 2:

// Input: nums = [4,1,2,1,2]
// Output: 4
// Example 3:

// Input: nums = [1]
// Output: 1

// first pass solution
var singleNumber = function(nums) {
    let seen = new Set();
    
    for (let num of nums) {
        if (!seen.has(num)) {
            seen.add(num);
        } else {
            seen.delete(num);
        }
    }
    return Array.from(seen)[0];
};

// second pass solution
var singleNumber = function(nums) {
    let dict = {};
    
    for (let num of nums) {
        if (!(num in dict)) {
            dict[num] = 0;
        }
        dict[num]++;
    }
    
    for (let key in dict) {
        if (dict[key] === 1) {
            return key;
        }
    }
};
