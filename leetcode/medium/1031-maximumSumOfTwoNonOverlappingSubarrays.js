// Given an array A of non-negative integers, return the maximum sum of elements in two non-overlapping (contiguous) subarrays, which 
// have lengths L and M.  (For clarification, the L-length subarray could occur before or after the M-length subarray.)

// Formally, return the largest V for which V = (A[i] + A[i+1] + ... + A[i+L-1]) + (A[j] + A[j+1] + ... + A[j+M-1]) and either:

// 0 <= i < i + L - 1 < j < j + M - 1 < A.length, or
// 0 <= j < j + M - 1 < i < i + L - 1 < A.length.

// Example 1:

// Input: A = [0,6,5,2,2,5,1,9,4], L = 1, M = 2
// Output: 20
// Explanation: One choice of subarrays is [9] with length 1, and [6,5] with length 2.
// Example 2:

// Input: A = [3,8,1,3,2,1,8,9,0], L = 3, M = 2
// Output: 29
// Explanation: One choice of subarrays is [3,8,1] with length 3, and [8,9] with length 2.

// first pass brute force solution
var maxSumTwoNoOverlap = function(A, L, M) {
    let output = 0;
    
    // L before M
    for (let i = L; i <= A.length - M + 1; i++) {
        let lSum = A.slice(i - L, i).reduce((acc, el) => acc + el);
        for (let j = i; j < A.length - M + 1; j++) {
            let mSum = A.slice(j, j + M).reduce((acc, el) => acc + el);
            output = Math.max(output, lSum + mSum);
        }
    }
    // M before L
    for (let i = M; i <= A.length - L + 1; i++) {
        let mSum = A.slice(i - M, i).reduce((acc, el) => acc + el);
        for (let j = i; j < A.length; j++) {
            let lSum = A.slice(j, j + L).reduce((acc, el) => acc + el);
            output = Math.max(output, lSum + mSum);
        }
    }
    
    return output;
};
