/*
Given a matrix consists of 0 and 1, find the distance of the nearest 0 for each cell.

The distance between two adjacent cells is 1.

Example 1:
Input:
[[0,0,0],
 [0,1,0],
 [0,0,0]]

Output:
[[0,0,0],
 [0,1,0],
 [0,0,0]]
 
Example 2:
Input:
[[0,0,0],
 [0,1,0],
 [1,1,1]]

Output:
[[0,0,0],
 [0,1,0],
 [1,2,1]]
 */
 
 // first pass solution using BFS to find shortest path 
 var updateMatrix = function(matrix) {       
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === 1) {
                matrix[i][j] = bfs(matrix, i, j, 0);
            }
        }
    }
    return matrix;
};

var bfs = function(matrix, row, col) {
    let queue = [[[row, col], 0]];

    while (queue.length) {
        const [[i, j], distance] = queue.shift();

        if (i < 0 || i >= matrix.length || j < 0 || j >= matrix[0].length) continue;

        if (matrix[i][j] === 0) return distance;

        const neighbors = [[i-1, j], [i+1, j], [i, j-1], [i, j+1]];

        for (let n of neighbors) {
            queue.push([n, distance + 1]);
        }
    }
}
 
