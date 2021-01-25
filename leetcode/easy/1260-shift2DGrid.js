// Given a 2D grid of size m x n and an integer k. You need to shift the grid k times.

// In one shift operation:

// Element at grid[i][j] moves to grid[i][j + 1].
// Element at grid[i][n - 1] moves to grid[i + 1][0].
// Element at grid[m - 1][n - 1] moves to grid[0][0].
// Return the 2D grid after applying shift operation k times.


// Example 1:
// Input: grid = [[1,2,3],[4,5,6],[7,8,9]], k = 1
// Output: [[9,1,2],[3,4,5],[6,7,8]]

// first pass solution
var shiftGrid = function(grid, k) {
    let m = grid.length;
    let n = grid[0].length;
    
    while (k > 0) {
        let start = grid[m - 1][n - 1];
       
        for (let i = 0; i < m; i++) {
            let nextStart = grid[i][n - 1];
            grid[i] = [start, ...grid[i].slice(0, n - 1)];
            start = nextStart;
        }
        k--;
    }
    return grid;
};

// second pass solution
var shiftGrid = function(grid, k) {
    let m = grid.length;
    let n = grid[0].length;
    
    while (k > 0) {
        let currNum = grid[m - 1][n - 1];
       
        for (let i = 0; i < m; i++) {
            let nextStart = grid[i][n - 1];
            grid[i] = [currNum, ...grid[i].slice(0, n - 1)];
            currNum = nextStart;
        }
        k--;
    }
    return grid;
};

