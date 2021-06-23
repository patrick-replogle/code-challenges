/*
Given a m * n matrix mat and an integer K, return a matrix answer where each answer[i][j] is the sum of all elements 
mat[r][c] for i - K <= r <= i + K, j - K <= c <= j + K, and (r, c) is a valid position in the matrix.
 
Example 1:
Input: mat = [[1,2,3],[4,5,6],[7,8,9]], K = 1
Output: [[12,21,16],[27,45,33],[24,39,28]]

Example 2:
Input: mat = [[1,2,3],[4,5,6],[7,8,9]], K = 2
Output: [[45,45,45],[45,45,45],[45,45,45]]
*/

// first pass brute force solution
var matrixBlockSum = function(mat, K) {
    let output = new Array(mat.length).fill().map(() => new Array(mat[0].length).fill(0));
    
    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat[0].length; j++) {
            findCurrentSum(mat, i, j, K, output);
        }
    }
    return output;
};

var findCurrentSum = function(mat, i, j, k, output) {
    let sum = 0;
    for(let row = i + k; row >= i - k; row--) {
        for (let col = j + k; col >= j - k; col--) {
            if (row >= 0 && row <= mat.length - 1 && col >= 0 && col <= mat[0].length - 1) {
                sum += mat[row][col];
            }
        }
    }
    output[i][j] = sum;
}
