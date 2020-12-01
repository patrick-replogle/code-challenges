// Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right, which minimizes the sum of all numbers along its path.

// Note: You can only move either down or right at any point in time.

// first pass solution using dynamic programming to calculate least sum to each cell in the grid along the way
const minPathSum = function(grid) {
    if (grid.length === 0) return 0;
    
    let dp = new Array(grid.length).fill()
        .map(row => new Array(grid[0].length).fill(0))
    
    dp[0][0] = grid[0][0];
    
    for (let i = 1; i < grid[0].length; i++) {
        dp[0][i] = grid[0][i] + dp[0][i-1]; // calculate sum of top row
    }
    
    for (let i = 1; i < grid.length; i++) {
        dp[i][0] = grid[i][0] + dp[i-1][0]; // calculate sum of first column in each row
    }
    
    for (let i = 1; i < grid.length; i++) {
        for (let j = 1; j < grid[0].length; j++) {
            dp[i][j] = Math.min(grid[i][j] + dp[i-1][j], grid[i][j] + dp[i][j-1]); // calculate the path to lowest suml
        }
    }
    return dp[dp.length - 1][dp[0].length - 1];
};
