/*
In a given 2D binary array A, there are two islands.  (An island is a 4-directionally connected group of 1s not connected to any other 1s.)

Now, we may change 0s to 1s so as to connect the two islands together to form 1 island.

Return the smallest number of 0s that must be flipped.  (It is guaranteed that the answer is at least 1.)

Example 1:
Input: A = [[0,1],[1,0]]
Output: 1

Example 2:
Input: A = [[0,1,0],[0,0,0],[0,0,1]]
Output: 2

Example 3:
Input: A = [[1,1,1,1,1],[1,0,0,0,1],[1,0,1,0,1],[1,0,0,0,1],[1,1,1,1,1]]
Output: 1
*/

// first pass solution => using BFT and DFT (very slow, but passes all tests)
var shortestBridge = function(A) {
    let foundFirstIsland = false;
    let shortest = Infinity;
    
    for (let i = 0; i < A.length; i++) {
        for (let j = 0; j < A[0].length; j++) {
            if (A[i][j] === 1) {
                dft(A, i, j);
                foundFirstIsland = true; 
                break;
            } 
        }
        if (foundFirstIsland) break;
    }
    
    for (let i = 0; i < A.length; i++) {
        for (let j = 0; j < A[0].length; j++) {
            if (A[i][j] === '#') {
               shortest = Math.min(shortest, bft(A, i, j)) 
            }
        }
    }
    
    return shortest;
};

var dft = function(A, i, j) {
    if (i < 0 || i >= A.length || j < 0 || j >= A[0].length) return;
    if (A[i][j] === 0 || A[i][j] === '#') return;
    
    A[i][j] = '#'; // mark first island so we can differentiate it from the second island
    
    dft(A, i-1, j);
    dft(A, i+1, j);
    dft(A, i, j-1);
    dft(A, i, j+1);
}

var bft = function(A, i, j) {
    let visited = new Array(A.length).fill().map(() => new Array(A[0].length).fill(false));
    let queue = [[i, j, 0]];
    let neighbors = [[-1, 0], [1, 0], [0, -1], [0, 1]];
    let min = Infinity;
    
    while (queue.length) {
        let [row, col, zereos] = queue.shift();
        
        if (visited[row][col]) continue;
        
        if (A[row][col] === 1) {
            min = Math.min(min, zereos);
            continue;
        }
      
        if (A[row][col] === 0) zereos++;
        visited[row][col] = true;
        
        for (let [x, y] of neighbors) {
            let nextRow = row + x;
            let nextCol = col + y;
            
            if (nextRow >= 0 && 
                nextRow < A.length && 
                nextCol >= 0 && 
                nextCol < A[0].length && 
                A[nextRow][nextCol] !== '#') 
            {
                queue.push([nextRow, nextCol, zereos]);
            }
        }
    }
    return min;
}





