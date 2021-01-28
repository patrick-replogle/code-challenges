/*
Given an array of integers nums and a positive integer k, find whether it's possible to divide this array into sets of k consecutive 
numbers
Return True if it is possible. Otherwise, return False.

Example 1:
Input: nums = [1,2,3,3,4,4,5,6], k = 4
Output: true
Explanation: Array can be divided into [1,2,3,4] and [3,4,5,6].

Example 2:
Input: nums = [3,2,1,2,3,4,3,4,5,9,10,11], k = 3
Output: true
Explanation: Array can be divided into [1,2,3] , [2,3,4] , [3,4,5] and [9,10,11].
*/

// first pass solution
var isPossibleDivide = function(nums, k) {   
    let arrays = [];
    nums.sort((a, b) => a - b);
    
    nums.forEach((num) => {
        if (!arrays.length) {
            arrays.push([num]);
        } else {
            let flag = false;
            for (let arr of arrays) {
                if (arr[arr.length - 1] === num - 1 && arr.length < k) {
                    arr.push(num);
                    flag = true;
                    break;
                } 
            }
            if (!flag) arrays.push([num]);
        }
    })
    
    for (let arr of arrays) {
        if (arr.length !== k) {
            return false;
        }
    }
    return true;
};
