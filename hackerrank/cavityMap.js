/*
Function Description

Complete the cavityMap function in the editor below.

cavityMap has the following parameter(s):

string grid[n]: each string represents a row of the grid
Returns

string{n}: the modified grid
*/

// first pass solution
function cavityMap(grid) {
    grid = grid.map(str => str.split(''));
    
    for (let i = 1; i < grid.length - 1; i++) {
        for (let j = 1; j < grid[0].length - 1; j++) {
            if (grid[i][j-1] < grid[i][j] && grid[i][j+1] < grid[i][j]) {
                if (grid[i-1][j] < grid[i][j] && grid[i+1][j] < grid[i][j]) {
                    grid[i][j] = 'X';
                }
            }
        }
    }
    return grid.map(arr => arr.join(''));
}
