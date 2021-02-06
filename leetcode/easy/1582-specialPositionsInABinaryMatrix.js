/*
Given a rows x cols matrix mat, where mat[i][j] is either 0 or 1, return the number of special positions in mat.

A position (i,j) is called special if mat[i][j] == 1 and all other elements in row i and column j are 0 (rows and columns are 0-indexed).

Example 1:
Input: mat = [[1,0,0],
              [0,0,1],
              [1,0,0]]
Output: 1
Explanation: (1,2) is a special position because mat[1][2] == 1 and all other elements in row 1 and column 2 are 0.

Example 2:
Input: mat = [[1,0,0],
              [0,1,0],
              [0,0,1]]
Output: 3
Explanation: (0,0), (1,1) and (2,2) are special positions. 
*/

// first pass solution
var numSpecial = function(mat) {
    let rows = {};
    let col = {};
    let output = 0;
    
    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat[0].length; j++) {
            if (mat[i][j] === 1) {
                if (!rows.hasOwnProperty(i)) rows[i] = [];
                if (!col.hasOwnProperty(j)) col[j] = [];
                rows[i].push(j);
                col[j].push(i);
            }
        }
    }
    
    for (let row in rows) {
        if (rows[row].length === 1) {
            if (col[rows[row].pop()].length === 1) {
                output++;
            }
        }
    }
    return output;
};

// second pass solution 
var numSpecial = function(mat) {
    let output = 0;
    
    for (let i = 0; i < mat.length; i++) {
        let index = null;
        let rowSum = mat[i].reduce((acc, el, j) => {
            if (el === 1) {
                index = j;
            }
            return acc + el;
        }, 0)

        if (rowSum === 1) {
            let count = 0;
            for (let j = 0; j < mat.length; j++) {
                if (mat[j][index] === 1) count++;
            }
            if (count === 1) output++;
        }
    }
    return output;
};
