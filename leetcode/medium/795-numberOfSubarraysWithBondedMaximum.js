/*
We are given an array A of positive integers, and two positive integers L and R (L <= R).

Return the number of (contiguous, non-empty) subarrays such that the value of the maximum array element in that subarray is at least L and at most R.

Example :
Input: 
A = [2, 1, 4, 3]
L = 2
R = 3
Output: 3
Explanation: There are three subarrays that meet the requirements: [2], [2, 1], [3].
*/

var numSubarrayBoundedMax = function(A, L, R) {
    let output = 0;
    
    for (let i = 0; i < A.length; i++) {
        let max = 0;
        for (let j = i; j < A.length; j++) {
            max = Math.max(max, A[j]);
            if (max < L) continue;
            else if (max > R) break;
            output++;
        }
    }
    return output;
};
