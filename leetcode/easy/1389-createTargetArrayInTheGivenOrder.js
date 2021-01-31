/*
Given two arrays of integers nums and index. Your task is to create target array under the following rules:

Initially target array is empty.
From left to right read nums[i] and index[i], insert at index index[i] the value nums[i] in target array.
Repeat the previous step until there are no elements to read in nums and index.
Return the target array.

It is guaranteed that the insertion operations will be valid.

Example 1:
Input: nums = [0,1,2,3,4], index = [0,1,2,2,1]
Output: [0,4,1,3,2]
Explanation:
nums       index     target
0            0        [0]
1            1        [0,1]
2            2        [0,1,2]
3            2        [0,1,3,2]
4            1        [0,4,1,3,2]
*/

// first pass solution
var createTargetArray = function(nums, index) {
    let output = []
    
    for (let i = 0; i < nums.length; i++) {
        if (output[index[i]] === undefined) {
            output.push(nums[i]);
        } else {
            output.splice(index[i], 0, nums[i]);
        }
    }
    return output;
};

// second pass solution
var createTargetArray = function(nums, index) {
    let output = []
    
    for (let i = 0; i < nums.length; i++) {
        if (output[index[i]] === undefined) {
            output.push(nums[i]);
        } else {
            output = [...output.slice(0, index[i]), nums[i], ...output.slice(index[i])]
        }
    }
    return output;
};

// third pass solution
var createTargetArray = function(nums, index) {
    return index.reduce((output, currIndex, i) => {
        return [...output.slice(0, currIndex), nums[i], ...output.slice(currIndex)];
    }, []);
};

