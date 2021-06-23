// Given an m x n matrix. If an element is 0, set its entire row and column to 0. Do it in-place.

// Follow up:

// A straight forward solution using O(mn) space is probably a bad idea.
// A simple improvement uses O(m + n) space, but still not the best solution.
// Could you devise a constant space solution?

// first pass solution
function setZeroes(matrix: number[][]): void {
    let rowSet: Set<number> = new Set();
    let colSet: Set<number> = new Set();

    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[0].length; col++) {
            if (matrix[row][col] === 0) {
                rowSet.add(row);
                colSet.add(col);
            }
        }
    }

    for (let row of rowSet) {
        for (let col = 0; col < matrix[0].length; col++) {
            matrix[row][col] = 0;
        }
    }

    for (let row = 0; row < matrix.length; row++) {
        for (let col of colSet) {
            matrix[row][col] = 0;
        }
    }
};

// second pass solution => similar to the first, but cleaner
function setZeroes(matrix: number[][]): void {
    let seen: number[][] = [];

    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[0].length; col++) {
            if (matrix[row][col] === 0) {
                seen.push([row, col]);
            }
        }
    }

    for (let arr of seen) {
        let [row, col] = arr;
        
        for (let i = 0; i < matrix[0].length; i++) {
            matrix[row][i] = 0;
        }
        
        for (let j = 0; j < matrix.length; j++) {
            matrix[j][col] = 0;
        }
    }
};


