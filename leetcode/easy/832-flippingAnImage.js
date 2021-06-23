// Given a binary matrix A, we want to flip the image horizontally, then invert it, and return the resulting image.

// To flip an image horizontally means that each row of the image is reversed.  For example, flipping [1, 1, 0] horizontally results in [0, 1, 1].

// To invert an image means that each 0 is replaced by 1, and each 1 is replaced by 0. For example, inverting [0, 1, 1] results in [1, 0, 0].

// Example 1:

// Input: [[1,1,0],[1,0,1],[0,0,0]]
// Output: [[1,0,0],[0,1,0],[1,1,1]]
// Explanation: First reverse each row: [[0,1,1],[1,0,1],[0,0,0]].
// Then, invert the image: [[1,0,0],[0,1,0],[1,1,1]]
// Example 2:

// Input: [[1,1,0,0],[1,0,0,1],[0,1,1,1],[1,0,1,0]]
// Output: [[1,1,0,0],[0,1,1,0],[0,0,0,1],[1,0,1,0]]
// Explanation: First reverse each row: [[0,0,1,1],[1,0,0,1],[1,1,1,0],[0,1,0,1]].
// Then invert the image: [[1,1,0,0],[0,1,1,0],[0,0,0,1],[1,0,1,0]]

// first pass solution using Array.reverse() method
var flipAndInvertImage = function(matrix) {   
    for (let row = 0; row < matrix.length; row++) {
        matrix[row].reverse()
        for (let col = 0; col < matrix[0].length; col++) {
            if (matrix[row][col] === 1) {
                matrix[row][col] = 0;
            } else {
                matrix[row][col] = 1;
            }
        }
    }
    return matrix;
};

// second pass solution reversing each row manually
var flipAndInvertImage = function(matrix) {   
    let len = matrix.length;
    
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len / 2; j++) {
            [matrix[i][j], matrix[i][len - j - 1]] = [matrix[i][len - j - 1], matrix[i][j]]
        }
    }
    
    for (let row = 0; row < len; row++) {
        for (let col = 0; col < len; col++) {
            if (matrix[row][col] === 1) {
                matrix[row][col] = 0;
            } else {
                matrix[row][col] = 1;
            }
        }
    }
    return matrix;
};
