/*
You are given an integer array nums and an integer k.

In one operation, you can pick two numbers from the array whose sum equals k and remove them from the array.

Return the maximum number of operations you can perform on the array.

Example 1:
Input: nums = [1,2,3,4], k = 5
Output: 2
Explanation: Starting with nums = [1,2,3,4]:
- Remove numbers 1 and 4, then nums = [2,3]
- Remove numbers 2 and 3, then nums = []
There are no more pairs that sum up to 5, hence a total of 2 operations.
*/

// first pass solution
var maxOperations = function(nums, k) {
    let dict = {};
    let output = 0;
    
    for (let num of nums) {
        dict[num] ? dict[num] += 1 : dict[num] = 1;
        
        let target = k - num;
        if (dict.hasOwnProperty(target)) {
            if (num !== target) {
                if (dict[num] > 0 && dict[target] > 0) {
                    output++;
                    dict[num]--;
                    dict[target]--; 
                } 
            }
            else if (dict[num] >= 2) {
                dict[num] -= 2; 
                output++;
            }
        }
    }
    return output;
};
