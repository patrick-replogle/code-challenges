/*
Given an array of integers, find the subset of non-adjacent elements with the maximum sum. Calculate the sum of that subset. It is possible 
that the maximum sum is , the case when all elements are negative.

Example

The following subsets with more than  element exist. These exclude the empty subset and single element subsets which are also valid.

Subset      Sum
[-2, 3, 5]   6
[-2, 3]      1
[-2, -4]    -6
[-2, 5]      3
[1, -4]     -3
[1, 5]       6
[3, 5]       8
*/

// first pass solution
function maxSubsetSum(arr) {
    let dp = new Array(arr.length).fill(-Infinity);
    dp[0] = arr[0];
    dp[1] = Math.max(arr[0], arr[1]);
    
    for (let i = 2; i < arr.length; i++) {
        dp[i] = Math.max(dp[i-2] + arr[i], arr[i], dp[i - 1]);
    }
    return dp[dp.length-1];
}
