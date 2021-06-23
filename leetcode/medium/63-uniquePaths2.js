// A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).

// The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid 
// (marked 'Finish' in the diagram below).

// Now consider if some obstacles are added to the grids. How many unique paths would there be?

// An obstacle and space is marked as 1 and 0 respectively in the grid.

// first pass solution using dynamic programming 
// create a 2d array the same size as the obstacleGrid and store the number unique paths to arrive at each cell as we loop thru the array
// the last cell in the dp array will hold the final number of unique paths at the end of the problem

var uniquePathsWithObstacles = function(obstacleGrid) {
    if (obstacleGrid[0][0] === 1 || obstacleGrid.length === 0) {
        return 0;
    }
    
    let dp = new Array(obstacleGrid.length).fill()
        .map(row => new Array(obstacleGrid[0].length).fill(0))
    
    for (let i = 0; i < dp[0].length; i++) {
        if (obstacleGrid[0][i] === 1) break; 
        dp[0][i] = 1;
    }
    
    for (let i = 0; i < dp.length; i++) {
        if (obstacleGrid[i][0] === 1) break;
        dp[i][0] = 1;
    }

    for (let i = 1; i < dp.length; i++) {
        for (let j = 1; j < dp[0].length; j++) {
            if (obstacleGrid[i][j] !== 1) {
                if (obstacleGrid[i-1][j] !== 1) {
                    dp[i][j] += dp[i-1][j];
                }
                if (obstacleGrid[i][j-1] !== 1) {
                    dp[i][j] += dp[i][j-1];
                }
            } 
        }
    }
    return dp[dp.length - 1][dp[0].length - 1];
};
