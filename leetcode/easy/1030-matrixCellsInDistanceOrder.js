// We are given a matrix with R rows and C columns has cells with integer coordinates (r, c), where 0 <= r < R and 0 <= c < C.

// Additionally, we are given a cell in that matrix with coordinates (r0, c0).

// Return the coordinates of all cells in the matrix, sorted by their distance from (r0, c0) from smallest distance to largest distance.  
// Here, the distance between two cells (r1, c1) and (r2, c2) is the Manhattan distance, |r1 - r2| + |c1 - c2|.  (You may return the answer 
// in any order that satisfies this condition.)

// Example 1:
// Input: R = 1, C = 2, r0 = 0, c0 = 0
// Output: [[0,0],[0,1]]
// Explanation: The distances from (r0, c0) to other cells are: [0,1]

// Example 2:
// Input: R = 2, C = 2, r0 = 0, c0 = 1
// Output: [[0,1],[0,0],[1,1],[1,0]]
// Explanation: The distances from (r0, c0) to other cells are: [0,1,1,2]
// The answer [[0,1],[1,1],[0,0],[1,0]] would also be accepted as correct.

// first pass solution
var allCellsDistOrder = function(R, C, r0, c0) {
    let output = [];
    
    for (let row = 0; row < R; row++) {
        for (let col = 0; col < C; col++) {
            output.push([row, col])
        }
    }
    return output.sort((a, b) => 
                       (Math.abs(r0 - a[0]) + Math.abs(c0 - a[1])) - 
                       (Math.abs(r0 - b[0]) + Math.abs(c0 - b[1])));
};
