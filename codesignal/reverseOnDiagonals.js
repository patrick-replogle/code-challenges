// The longest diagonals of a square matrix are defined as follows:

// the first longest diagonal goes from the top left corner to the bottom right one;
// the second longest diagonal goes from the top right corner to the bottom left one.
// Given a square matrix, your task is to reverse the order of elements on both of its longest diagonals.

// Example

// For

// matrix = [[1, 2, 3],
//           [4, 5, 6],
//           [7, 8, 9]]
// the output should be

// reverseOnDiagonals(matrix) = [[9, 2, 7],
//                               [4, 5, 6],
//                               [3, 8, 1]]

function reverseOnDiagonals(matrix) {
    let diagOne = [];
    let diagTwo = [];
    let j = 0;
    let k = matrix[0].length - 1;
    
    for (let i = 0; i < matrix.length; i++) {
        diagOne.push(matrix[i][j]);
        diagTwo.push(matrix[i][k]);
        k--;
        j++;
    }

    j = 0;
    k = matrix[0].length - 1;

    for (let i = 0; i < matrix.length; i++) {
        matrix[i][j] = diagOne.pop();
        matrix[i][k] = diagTwo.pop();
        k--;
        j++;
    }
    
    return matrix;
}
