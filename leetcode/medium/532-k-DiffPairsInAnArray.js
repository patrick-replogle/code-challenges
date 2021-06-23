/*
Given an array of integers nums and an integer k, return the number of unique k-diff pairs in the array.

A k-diff pair is an integer pair (nums[i], nums[j]), where the following are true:

0 <= i, j < nums.length
i != j
|nums[i] - nums[j]| == k
Notice that |val| denotes the absolute value of val.

Example 1:
Input: nums = [3,1,4,1,5], k = 2
Output: 2
Explanation: There are two 2-diff pairs in the array, (1, 3) and (3, 5).
Although we have two 1s in the input, we should only return the number of unique pairs.
*/

// first pass solution
var findPairs = function(nums, k) {
    let set = new Set();
    
    nums.sort((a, b) => a - b);
    
    for (let i = 0; i < nums.length - 1; i++) {
        if (i > 0 && nums[i] === nums[i-1]) continue; // prevent duplicate calculations
        for (let j = i + 1; j < nums.length; j++) {
            if (Math.abs(nums[i] - nums[j]) === k) {
                set.add(nums[i] + ':' + nums[j]);
            }
            else if (Math.abs(nums[i] - nums[j]) > k) break; // nums are sorted so we can break early if difference is greater than k
        }
    }
    return set.size;
};

// second pass solution
var findPairs = function(nums, k) {
    let dict = {};
    let count = 0;
    
    for (let i = 0; i < nums.length; i++) {
        dict[nums[i]] ? dict[nums[i]] += 1 : dict[nums[i]] = 1;
    }
    
    if (k > 0) {
        for (let key in dict) {
            if ((Number(key) + k) in dict) {
                count++;
            }
        }  
    } else {
        for (let key in dict) {
            if (dict[key] > 1) {
                count++;
            }
        }   
    }
    return count;
};
