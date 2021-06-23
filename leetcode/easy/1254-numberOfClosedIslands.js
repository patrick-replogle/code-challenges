// Given a 2D grid consists of 0s (land) and 1s (water).  An island is a maximal 4-directionally connected group of 0s and a closed island is an 
// island totally (all left, top, right, bottom) surrounded by 1s.

// Return the number of closed islands.

// Example 1:
// Input: grid = [[1,1,1,1,1,1,1,0],[1,0,0,0,0,1,1,0],[1,0,1,0,1,1,1,0],[1,0,0,0,0,1,0,1],[1,1,1,1,1,1,1,0]]
// Output: 2
// Explanation: 
// Islands in gray are closed because they are completely surrounded by water (group of 1s).

// first pass solution using DFT
var closedIsland = function(grid) {
    let output = 0;
    
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            let isClosed = [true];
            if (grid[i][j] === 0) {
                dft(grid, i, j, isClosed);
                if (isClosed[0]) output++;
            }
        }
    }
    return output;
};

var dft = function(grid, i, j, isClosed) {
    if (i < 0 || i > grid.length - 1 || j < 0 || j > grid[0].length - 1) return; // out of bounds
    if (grid[i][j] === 1 || grid[i][j] === '#') return; // already visited or not a part of the island
    
    if (i === 0 || i === grid.length - 1 || j === 0 || j === grid[0].length - 1) {
        isClosed[0] = false; // island stretches to the border of matrix is not closed
    }
    
    grid[i][j] = '#';
    dft(grid, i - 1, j, isClosed);
    dft(grid, i + 1, j, isClosed);
    dft(grid, i, j - 1, isClosed);
    dft(grid, i, j + 1, isClosed);
}
