/*
Given a square matrix mat, return the sum of the matrix diagonals.

Only include the sum of all the elements on the primary diagonal and all the elements on the secondary diagonal that are not 
part of the primary diagonal.

Example 1:
Input: mat = [[1,2,3],
              [4,5,6],
              [7,8,9]]
Output: 25
Explanation: Diagonals sum: 1 + 5 + 9 + 3 + 7 = 25
Notice that element mat[1][1] = 5 is counted only once.
*/

// first pass solution
var diagonalSum = function(mat) {
    let left = 0;
    let right = mat[0].length - 1;
    let output = 0;
    
    for (let row = 0; row < mat.length; row++) {
        if (left !== right) {
            output += mat[row][left] + mat[row][right];
        } else {
            output += mat[row][left];
        }
        left++, right--;
    }
    return output;
};
