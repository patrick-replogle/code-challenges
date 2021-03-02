/*
We have a two dimensional matrix A where each value is 0 or 1.

A move consists of choosing any row or column, and toggling each value in that row or column: changing all 0s to 1s, and all 1s to 0s.

After making any number of moves, every row of this matrix is interpreted as a binary number, and the score of the matrix is the sum of 
these numbers.

Return the highest possible score.

Example 1:
Input: [[0,0,1,1],[1,0,1,0],[1,1,0,0]]
Output: 39
Explanation:
Toggled to [[1,1,1,1],[1,0,0,1],[1,1,1,1]].
0b1111 + 0b1001 + 0b1111 = 15 + 9 + 15 = 39
*/

// first pass solution
var matrixScore = function(A) {
    for (let i = 0; i < A.length; i++) {
        if (A[i][0] === 0) {
            flipRow(A, i);
        }
    }
    
    for (let i = 1; i < A[0].length; i++) {
        if (countBits(A, i)) {
            flipCol(A, i);
        }
    }
    return A.reduce((acc, row) => acc + parseInt(row.join(''), 2), 0);
};

var flipRow = function(A, row) {
    for (let col = 0; col < A[0].length; col++) {
        A[row][col] = A[row][col] === 1 ? 0 : 1;
    }
}

var flipCol = function(A, col) {
    for (let row = 0; row < A.length; row++) {
        A[row][col] = A[row][col] === 1 ? 0 : 1;
    }
}

var countBits = function(A, col) {
    let zereos = 0;
    let ones = 0;
    
    for (let row = 0; row < A.length; row++) {
        if(A[row][col] === 0) zereos++;
        else ones++;
    }
    return zereos > ones;
}
