// Given an array A of 0s and 1s, we may change up to K values from 0 to 1.

// Return the length of the longest (contiguous) subarray that contains only 1s. 

// Example 1:
// Input: A = [1,1,1,0,0,0,1,1,1,1,0], K = 2
// Output: 6
// Explanation: 
// [1,1,1,0,0,1,1,1,1,1,1]
// Bolded numbers were flipped from 0 to 1.  The longest subarray is underlined.

// Example 2:
// Input: A = [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], K = 3
// Output: 10
// Explanation: 
// [0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1]
// Bolded numbers were flipped from 0 to 1.  The longest subarray is underlined.

// first pass solution using two pointers
var longestOnes = function(A, K) {
    let left = 0;
    let right = 0;
    let max = -Infinity;
    let temp = K;
    
    while (right < A.length) {
        max = Math.max(max, right - left);
        
        if (A[right] === 1) {
            right++;
        } else if (A[right] === 0 && temp > 0) {
            temp--;
            right++;
        } else {
            left++;
            right = left;
            temp = K;
        }
    }
    return Math.max(max, right - left);
};
