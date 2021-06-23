// Given a m * n matrix of ones and zeros, return how many square submatrices have all ones.

// Example 1:
// Input: matrix =
// [
//   [0,1,1,1],
//   [1,1,1,1],
//   [0,1,1,1]
// ]
// Output: 15
// Explanation: 
// There are 10 squares of side 1.
// There are 4 squares of side 2.
// There is  1 square of side 3.
// Total number of squares = 10 + 4 + 1 = 15.

// Example 2:
// Input: matrix = 
// [
//   [1,0,1],
//   [1,1,0],
//   [1,1,0]
// ]
// Output: 7
// Explanation: 
// There are 6 squares of side 1.  
// There is 1 square of side 2. 
// Total number of squares = 6 + 1 = 7.

// first pass solution
var countSquares = function(matrix) {
    let dp = new Array(matrix.length).fill().map(() => new Array(matrix[0].length).fill(0));
    
    for (let i = 0; i < matrix[0].length; i++) {
        if (matrix[0][i] === 1) dp[0][i] = 1;
    }
    
    for (let i = 0; i < matrix.length; i++) {
        if (matrix[i][0] === 1) dp[i][0] = 1;
    }
    
    for (let i = 1; i < matrix.length; i++) {
        for (let j = 1; j < matrix[0].length; j++) {
            if (matrix[i][j] === 1) {
                dp[i][j] = 1 + Math.min(dp[i-1][j], dp[i-1][j-1], dp[i][j-1]);
            }
        }
    }
    return dp.map((arr) => arr.reduce((acc, el) => acc + el)).reduce((acc, el) => acc + el);
};

// second pass solution
var countSquares = function(matrix) {
    let output = 0;
    
    output += matrix[0].reduce((acc, el) => acc + el); // add single squares in first row
    matrix.forEach((arr, i) => i > 0 ? output += arr[0] : ''); // add single squares in first col
    
    for (let i = 1; i < matrix.length; i++) {
        for (let j = 1; j < matrix[0].length; j++) {
            if (matrix[i][j] === 1) {
                matrix[i][j] = 1 + Math.min(matrix[i-1][j], matrix[i-1][j-1], matrix[i][j-1]); // find larger squares
            }
            output += matrix[i][j] 
        }
    }
    return output;
};
