// You are given an m x n matrix M initialized with all 0's and an array of operations ops, where ops[i] = [ai, bi] means M[x][y] should be incremented by 
// one for all 0 <= x < ai and 0 <= y < bi.

// Count and return the number of maximum integers in the matrix after performing all the operations.

// Example 1:
// Input: m = 3, n = 3, ops = [[2,2],[3,3]]
// Output: 4
// Explanation: The maximum integer in M is 2, and there are four of it in M. So return 4.

// Example 2:
// Input: m = 3, n = 3, ops = [[2,2],[3,3],[3,3],[3,3],[2,2],[3,3],[3,3],[3,3],[2,2],[3,3],[3,3],[3,3]]
// Output: 4

// first pass brute force solution => times out
var maxCount = function(m, n, ops) {
    let matrix = new Array(m).fill().map(() => new Array(n).fill(0));
    let max = 0;
    let count = 0;
    
    for (let op of ops) {
        let [row, col] = op;

        for (let i = 0; i < row; i++) {
            for (let j = 0; j < col; j++) {
                matrix[i][j]++;
                max = Math.max(max, matrix[i][j]);
            }
        }
    }
    
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (matrix[i][j] === max) count++;
        }
    }
    return count;
};

// linear solution
var maxCount = function(m, n, ops) {
    let minRow = m;
    let minCol = n;
    
    for (let op of ops) {
        minRow = Math.min(minRow, op[0]);
        minCol = Math.min(minCol, op[1]);
    }
    return minRow * minCol;
};
