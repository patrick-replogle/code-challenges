/*
Given an array of integers arr and two integers k and threshold.

Return the number of sub-arrays of size k and average greater than or equal to threshold.

Example 1:
Input: arr = [2,2,2,2,5,5,5,8], k = 3, threshold = 4
Output: 3
Explanation: Sub-arrays [2,5,5],[5,5,5] and [5,5,8] have averages 4, 5 and 6 respectively. All other sub-arrays of size 3 have 
averages less than 4 (the threshold).

Example 2:
Input: arr = [1,1,1,1,1], k = 1, threshold = 0
Output: 5
*/

// first pass brute force solution
var numOfSubarrays = function(arr, k, threshold) {
    let count = 0;
    
    for (let i = 0; i < arr.length - k + 1; i++) {
        let sum = arr.slice(i, i + k).reduce((acc, el) => acc + el);
        if (sum / k >= threshold) count++;
    }
    return count;
};

// second pass solution with linear time complexity using sliding window
var numOfSubarrays = function(arr, k, threshold) {
    let count = 0;
    let sum = arr.slice(0, k).reduce((acc, el) => acc + el);
    let start = 0;
    
    if (sum / k >= threshold) count++;
    
    for (let i = k; i < arr.length; i++) {
        sum -= arr[start];
        sum += arr[i];
        start++;
        if (sum / k >= threshold) count++;
    }
    return count;
};
