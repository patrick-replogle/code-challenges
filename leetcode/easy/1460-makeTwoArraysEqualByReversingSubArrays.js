/*
Given two integer arrays of equal length target and arr.

In one step, you can select any non-empty sub-array of arr and reverse it. You are allowed to make any number of steps.

Return True if you can make arr equal to target, or False otherwise.

Example 1:
Input: target = [1,2,3,4], arr = [2,4,1,3]
Output: true
Explanation: You can follow the next steps to convert arr to target:
1- Reverse sub-array [2,4,1], arr becomes [1,4,2,3]
2- Reverse sub-array [4,2], arr becomes [1,2,4,3]
3- Reverse sub-array [4,3], arr becomes [1,2,3,4]
There are multiple ways to convert arr to target, this is not the only way to do so.
*/

// first pass solution
var canBeEqual = function(target, arr) {
    return target.sort((a, b) => a - b).join('') === arr.sort((a, b) => a - b).join('');
};

// second pass solution without sorting
var canBeEqual = function(target, arr) {
    if (target.length !== arr.length) return false;
    
    let counter = {};
    
    for (let i = 0; i < target.length; i++) {
        if (!(target[i] in counter)) counter[target[i]] = 0;
        if (!(arr[i] in counter)) counter[arr[i]] = 0;
        counter[target[i]]++;
        counter[arr[i]]--;
    }
    
    return Object.values(counter).every(num => num === 0);
};
