// A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).

// The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of 
// the grid (marked 'Finish' in the diagram below).

// How many possible unique paths are there?

// first pass using dynamic programming
var uniquePaths = function(m, n) {
    let dp = new Array(m).fill().map(row => new Array(n).fill(0));
    
    for (let i = 1; i < n; i++) dp[0][i] = 1;
    for (let i = 0; i < m; i++) dp[i][0] = 1;
    
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            dp[i][j] += dp[i-1][j] + dp[i][j-1];
        }
    }
    return dp[m - 1][n - 1]
};

// second pass solution using less memory for the dp array
var uniquePaths = function(m, n) {
    let dp = new Array(n).fill(1);
    
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            dp[j] += dp[j-1];
        }
    }
    return dp[n-1];
};
