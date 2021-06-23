/*
Sudoku is a number-placement puzzle. The objective is to fill a 9 × 9 grid with numbers in such a way that each column, each row, and each of 
the nine 3 × 3 sub-grids that compose the grid all contain all of the numbers from 1 to 9 one time.

Implement an algorithm that will check whether the given grid of numbers represents a valid Sudoku puzzle according to the layout rules described 
above. Note that the puzzle represented by grid does not have to be solvable.

Example

For

grid = [['.', '.', '.', '1', '4', '.', '.', '2', '.'],
        ['.', '.', '6', '.', '.', '.', '.', '.', '.'],
        ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
        ['.', '.', '1', '.', '.', '.', '.', '.', '.'],
        ['.', '6', '7', '.', '.', '.', '.', '.', '9'],
        ['.', '.', '.', '.', '.', '.', '8', '1', '.'],
        ['.', '3', '.', '.', '.', '.', '.', '.', '6'],
        ['.', '.', '.', '.', '.', '7', '.', '.', '.'],
        ['.', '.', '.', '5', '.', '.', '.', '7', '.']]
the output should be
sudoku2(grid) = true;

For

grid = [['.', '.', '.', '.', '2', '.', '.', '9', '.'],
        ['.', '.', '.', '.', '6', '.', '.', '.', '.'],
        ['7', '1', '.', '.', '7', '5', '.', '.', '.'],
        ['.', '7', '.', '.', '.', '.', '.', '.', '.'],
        ['.', '.', '.', '.', '8', '3', '.', '.', '.'],
        ['.', '.', '8', '.', '.', '7', '.', '6', '.'],
        ['.', '.', '.', '.', '.', '2', '.', '.', '.'],
        ['.', '1', '.', '2', '.', '.', '.', '.', '.'],
        ['.', '2', '.', '.', '3', '.', '.', '.', '.']]
the output should be
sudoku2(grid) = false.

The given grid is not correct because there are two 1s in the second column. Each column, each row, and each 3 × 3 subgrid can only contain 
the numbers 1 through 9 one time.
*/

// first pass solution
function sudoku2(grid) {
    for (let row of grid) {
        if (!checkRow(row)) return false; 
    }
    
    for (let j = 0; j < grid[0].length; j++) {
        if (!checkCol(j, grid)) return false;
    }
    
    for (let i = 1; i < grid.length; i += 3) {
        for (let j = 1; j < grid[0].length; j += 3) {
            if (!checkBox(grid, i, j)) return false;
        }
    }
    return true;
}

function checkCol(j, grid) {
    let seen = new Set();
    for(let i = 0; i < grid.length; i++) {
        if (grid[i][j] !== '.' && seen.has(grid[i][j])) {
            return false;
        }
        seen.add(grid[i][j]);
    }
    return true;
}

function checkRow(row) {
    let seen = new Set();
    for (let num of row) {
        if (num !== '.' && seen.has(num)) {
            return false;
        }
        seen.add(num)
    }
    return true;
} 

function checkBox(grid, i, j) {
    let seen = new Set();
    let neighbors = [
        [0, 0], // middle
        [-1, 0], // n
        [1, 0], // s
        [0, 1], // e
        [0, -1], // w
        [-1, -1], // nw
        [1, 1], // ne
        [-1, 1], // se
        [1, -1], // sw
    ]
    
    for (let [x, y] of neighbors) {
        let curr = grid[i+x][j+y];
        if (curr !== '.' && seen.has(curr)) {
            return false;
        }
        seen.add(curr);
    }
    return true;
}
