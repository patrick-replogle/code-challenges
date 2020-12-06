// You are given row x col grid representing a map where grid[i][j] = 1 represents land and grid[i][j] = 0 represents water.

// Grid cells are connected horizontally/vertically (not diagonally). The grid is completely surrounded by water, and there is exactly 
// one island (i.e., one or more connected land cells).

// The island doesn't have "lakes", meaning the water inside isn't connected to the water around the island. One cell is a square with 
// side length 1. The grid is rectangular, width and height don't exceed 100. Determine the perimeter of the island.

// Example 1:

// Input: grid = [[0,1,0,0],[1,1,1,0],[0,1,0,0],[1,1,0,0]]
// Output: 16
// Explanation: The perimeter is the 16 yellow stripes in the image above.

// first pass solution
const islandPerimeter = function(grid) {
    let perimeter = 0;
    
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === 1) {
               perimeter += countCell(grid, i, j); 
            }
        }
    }
    
    return perimeter;
};


const countCell = function(grid, i, j) {
    let perimeter = 0;
    // north
    if (i === 0 || grid[i-1][j] === 0) {
        perimeter++;
    }
    // south
    if (i === grid.length - 1 || grid[i+1][j] === 0) {
        perimeter++;
    }
    // west
    if (j === 0 || grid[i][j-1] === 0) {
        perimeter++;
    }
    // east
    if (j === grid[0].length - 1 || grid[i][j+1] === 0) {
        perimeter++;
    }
    return perimeter;
}
