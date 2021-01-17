// Given a square array of integers A, we want the minimum sum of a falling path through A.

// A falling path starts at any element in the first row, and chooses one element from each row.  The next row's choice must be in a column that 
// is different from the previous row's column by at most one.

// Example 1:
// Input: [[1,2,3],[4,5,6],[7,8,9]]
// Output: 12
// Explanation: 
// The possible falling paths are:
// [1,4,7], [1,4,8], [1,5,7], [1,5,8], [1,5,9]
// [2,4,7], [2,4,8], [2,5,7], [2,5,8], [2,5,9], [2,6,8], [2,6,9]
// [3,5,7], [3,5,8], [3,5,9], [3,6,8], [3,6,9]
// The falling path with the smallest sum is [1,4,7], so the answer is 12.

// first pass solution using dynamic programming
var minFallingPathSum = function(A) {
    let dp = new Array(A.length).fill().map(() => new Array(A[0].length).fill(0));
    
    for (let i = 0; i < A[0].length; i++) {
        dp[0][i] = A[0][i];
    }
    
    for (let i = 1; i < A.length; i++) {
        for (let j = 0; j < A[0].length; j++) {
            if (j === 0) {
                dp[i][j] = Math.min(A[i][j] + dp[i-1][j], A[i][j] + dp[i-1][j + 1]);
            } else if (j === A[0].length -1) {
                dp[i][j] = Math.min(A[i][j] + dp[i-1][j], A[i][j] + dp[i-1][j-1]);
            } else {
                dp[i][j] = Math.min(A[i][j] + dp[i-1][j], A[i][j] + dp[i-1][j-1], A[i][j] + dp[i-1][j+1]);
            }
        }
    }
    return Math.min(...dp[dp.length - 1]);
};
