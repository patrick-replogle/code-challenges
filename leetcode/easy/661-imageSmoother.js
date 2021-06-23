/*
Given a 2D integer matrix M representing the gray scale of an image, you need to design a smoother to make the gray scale of each cell becomes 
the average gray scale (rounding down) of all the 8 surrounding cells and itself. If a cell has less than 8 surrounding cells, then use as many as you can.

Example 1:
Input:
[[1,1,1],
 [1,0,1],
 [1,1,1]]
Output:
[[0, 0, 0],
 [0, 0, 0],
 [0, 0, 0]]
Explanation:
For the point (0,0), (0,2), (2,0), (2,2): floor(3/4) = floor(0.75) = 0
For the point (0,1), (1,0), (1,2), (2,1): floor(5/6) = floor(0.83333333) = 0
For the point (1,1): floor(8/9) = floor(0.88888889) = 0
*/

// first pass solution
var imageSmoother = function(M) { 
    let output = new Array(M.length).fill().map(() => new Array(M[0].length).fill(0));
    
    for (let i = 0; i < M.length; i++) {
        for (let j = 0; j < M[0].length; j++) {
            output[i][j] = calculateAverage(M, i, j);
        }
    }
    return output;
};

var calculateAverage = function(matrix, i, j) {
    let neighbors = [[-1, 0], [1, 0], [0, -1], [0, 1], [-1, -1], [1, 1], [-1, 1], [1, -1]];
    let sum = matrix[i][j];
    let count = 1;
    
    for (let [x, y] of neighbors) {
        let row = i + x;
        let col = j + y;
        if (row >= 0 && row < matrix.length && col >= 0 && col < matrix[0].length) {
            sum += matrix[row][col];
            count++;
        }
    }
    return Math.floor(sum / count);
}
