// In the popular Minesweeper game you have a board with some mines and those cells that don't contain a mine have a number in it that 
// indicates the total number of mines in the neighboring cells. Starting off with some arrangement of mines we want to create a Minesweeper game setup.

// Example:

// matrix = [[true, false, false],
//           [false, true, false],
//           [false, false, false]]
          
// the output should be:

// minesweeper(matrix) = [[1, 2, 1],
//                        [2, 1, 1],
//                        [1, 1, 1]]

// first pass solution
function minesweeper(matrix) {
    let board = new Array(matrix.length).fill().map(row => new Array(matrix[0].length).fill(0));
    
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            board[i][j] = calculateNeighbors(matrix, i, j);
        }
    }
    return board;
}

function calculateNeighbors(matrix, i, j) {
    let count = 0;
    
    if (i > 0 && matrix[i-1][j]) count++; // north
    if (i < matrix.length - 1 && matrix[i+1][j]) count++; // south
    if (j > 0 && matrix[i][j-1]) count++; // west
    if (j < matrix[0].length - 1 && matrix[i][j+1]) count++; // east
    if (i > 0 && j > 0 && matrix[i-1][j-1]) count++; // north west
    if (i > 0 && j < matrix[0].length - 1 && matrix[i-1][j+1]) count++; // northeast
    if (i < matrix.length - 1 && j > 0 && matrix[i+1][j-1]) count++; // southwest
    if (i < matrix.length - 1 && j < matrix[0].length - 1 && matrix[i+1][j+1]) count++; // southeast
    
    return count;
}
