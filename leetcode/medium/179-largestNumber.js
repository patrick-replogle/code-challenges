/*
Given a list of non-negative integers nums, arrange them such that they form the largest number.

Note: The result may be very large, so you need to return a string instead of an integer.

Example 1:
Input: nums = [10,2]
Output: "210"

Example 2:
Input: nums = [3,30,34,5,9]
Output: "9534330"

Example 3:
Input: nums = [1]
Output: "1"
*/

// first pass solution => bubble sort
var largestNumber = function(nums) {
    let arr = nums.map(num => String(num));
    let swaps = false;
    
    for (let i = arr.length - 1; i >= 0; i--) {
        for (let j = arr.length - 1; j >= 1; j--) {
            if (arr[j] + arr[j-1] > arr[j-1] + arr[j]) {
                [arr[j], arr[j-1]] = [arr[j-1], arr[j]];
                swaps = true;
            }
        }
        if (!swaps) break;
    }
    return arr[0] === '0' ? '0' : arr.join('');
};

// second pass solution using built in sort method
var largestNumber = function(nums) {
    let arr = nums.map(num => String(num));
    arr.sort((a, b) => (b + a) - (a + b));
    
    return arr[0] === '0' ? '0' : arr.join('');
};
