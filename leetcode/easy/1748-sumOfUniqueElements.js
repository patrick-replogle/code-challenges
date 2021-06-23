/*
You are given an integer array nums. The unique elements of an array are the elements that appear exactly once in the array.

Return the sum of all the unique elements of nums.

Example 1:
Input: nums = [1,2,3,2]
Output: 4
Explanation: The unique elements are [1,3], and the sum is 4.

Example 2:
Input: nums = [1,1,1,1,1]
Output: 0
Explanation: There are no unique elements, and the sum is 0.
*/

// first pass solution
var sumOfUnique = function(nums) {
    let count = {};
    
    for (let num of nums) {
        count[num] ? count[num] += 1 : count[num] = 1;
    }

    return Object.entries(count).reduce((acc, el) => {
        if (el[1] === 1) {
            return acc + Number(el[0]);
        }
        return acc;
    }, 0);
};
