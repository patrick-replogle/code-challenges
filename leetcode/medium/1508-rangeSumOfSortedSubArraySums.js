/*
Given the array nums consisting of n positive integers. You computed the sum of all non-empty continous subarrays from the array 
and then sort them in non-decreasing order, creating a new array of n * (n + 1) / 2 numbers.

Return the sum of the numbers from index left to index right (indexed from 1), inclusive, in the new array. Since the answer can be a 
huge number return it modulo 10^9 + 7.

Example 1:
Input: nums = [1,2,3,4], n = 4, left = 1, right = 5
Output: 13 
Explanation: All subarray sums are 1, 3, 6, 10, 2, 5, 9, 3, 7, 4. After sorting them in non-decreasing order we have the new array 
[1, 2, 3, 3, 4, 5, 6, 7, 9, 10]. The sum of the numbers from index le = 1 to ri = 5 is 1 + 2 + 3 + 3 + 4 = 13. 
*/

// first pass solution (test case 53 is incorrect on leetcode.com)
var rangeSum = function(nums, n, left, right) {
    let sums = [];
    let output = 0;
    
    for (let i = 0; i < n; i++) {
        let sum = 0;
        for (let j = i; j < n; j++) {
            sum += nums[j];
            sums.push(sum);
        }
    }
    
    sums.sort((a, b) => a - b);

    return sums.slice(left - 1, right).reduce((acc, el) => acc + el) % 1000000007; 
};
