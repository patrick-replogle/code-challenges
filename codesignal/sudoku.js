// Sudoku is a number-placement puzzle. The objective is to fill a 9 × 9 grid with digits so that each column, each row, and each of the nine 3 × 3 
// sub-grids that compose the grid contains all of the digits from 1 to 9.

// This algorithm should check if the given grid of numbers represents a correct solution to Sudoku.

function sudoku(grid) {
    if (checkRows(grid) && checkColumns(grid) && checkBox(grid)) {
        return true;
    }
    return false;
}

function checkRows(grid) {
    for (let i = 0; i < grid.length; i++) {
        let set = new Set(grid[i]);
        if (set.size !== 9) {
            return false
        };
    }
    return true;
}

function checkColumns(grid) {
    for (let i = 0; i < grid.length; i++) {
        let set = new Set([grid[0][i], grid[1][i], grid[2][i], 
                           grid[3][i], grid[4][i], grid[5][i], 
                           grid[6][i], grid[7][i], grid[8][i]
                          ]);
        if (set.size !== 9){ 
            return false
        };
    }
    return true;
}

function checkBox(grid, i, j) {
    for (let i = 1; i < grid.length - 1; i += 3) {
        for (let j = 1; j < grid[0].length - 1; j += 3) {
            let set = new Set([grid[i - 1][j - 1], grid[i - 1][j], grid[i - 1][j + 1], 
                               grid[i][j - 1], grid[i][j], grid[i][j + 1], 
                               grid[i + 1][j - 1], grid[i + 1][j], grid[i + 1][j + 1]
                              ])
                               
            if (set.size !== 9) {
                return false;
            }
        }
    }
    return true
}
