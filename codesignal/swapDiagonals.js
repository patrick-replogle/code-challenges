// The longest diagonals of a square matrix are defined as follows:

// the first longest diagonal goes from the top left corner to the bottom right one;
// the second longest diagonal goes from the top right corner to the bottom left one.
// Given a square matrix, your task is to swap its longest diagonals by exchanging their elements at the corresponding positions.

// Example

// For

// matrix = [[1, 2, 3],
//           [4, 5, 6],
//           [7, 8, 9]]
// the output should be

// swapDiagonals(matrix) = [[3, 2, 1],
//                          [4, 5, 6],
//                          [9, 8, 7]]

function swapDiagonals(matrix) {
    let j = 0;
    let k = matrix[0].length - 1;
    
    for (let i = 0; i < matrix.length; i++) {
        [matrix[i][j], matrix[i][k]] = [matrix[i][k], matrix[i][j]];
        j++;
        k--;
    }
    return matrix;
}
