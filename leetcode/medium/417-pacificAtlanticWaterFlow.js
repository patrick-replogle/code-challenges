// Given an m x n matrix of non-negative integers representing the height of each unit cell in a continent, the "Pacific ocean" touches the left 
// and top edges of the matrix and the "Atlantic ocean" touches the right and bottom edges.

// Water can only flow in four directions (up, down, left, or right) from a cell to another one with height equal or lower.

// Find the list of grid coordinates where water can flow to both the Pacific and Atlantic ocean.

// Note:

// The order of returned grid coordinates does not matter.
// Both m and n are less than 150.
 
// Example:

// Given the following 5x5 matrix:

//   Pacific ~   ~   ~   ~   ~ 
//        ~  1   2   2   3  (5) *
//        ~  3   2   3  (4) (4) *
//        ~  2   4  (5)  3   1  *
//        ~ (6) (7)  1   4   5  *
//        ~ (5)  1   1   2   4  *
//           *   *   *   *   * Atlantic

// Return:

// [[0, 4], [1, 3], [1, 4], [2, 2], [3, 0], [3, 1], [4, 0]] (positions with parentheses in above matrix).

const pacificAtlantic = function(matrix) {
    if (matrix.length === 0) return [];
    
    let result = [];
    let atlantic = new Array(matrix.length).fill().map(row => new Array(matrix[0].length).fill(0));
    let pacific = new Array(matrix.length).fill().map(row => new Array(matrix[0].length).fill(0));
    
    for (let row = 0; row < matrix.length; row++) {
        dfs(matrix, row, 0, -1, pacific);
        dfs(matrix, row, matrix[0].length - 1, -1, atlantic);
    }
    
    for (let col = 0; col < matrix[0].length; col++) {
        dfs(matrix, 0, col, -1, pacific);
        dfs(matrix, matrix.length - 1, col, -1, atlantic);
    }
    
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (atlantic[i][j] === 1 && pacific[i][j] === 1) {
                result.push([i, j]);
            }
        }
    }
    return result;
};

const dfs = function(matrix, row, col, prev, ocean) {
    if (row < 0 || row >= matrix.length || col < 0 || col >= matrix[0].length) return; 
    if (matrix[row][col] < prev) return; 
    if (ocean[row][col] === 1) return;
    
    ocean[row][col] = 1;
    
    dfs(matrix, row - 1, col, matrix[row][col], ocean);
    dfs(matrix, row + 1, col, matrix[row][col], ocean);
    dfs(matrix, row, col - 1, matrix[row][col], ocean);
    dfs(matrix, row, col + 1, matrix[row][col], ocean);
}
