/*
There are n cities. Some of them are connected, while some are not. If city a is connected directly with city b, and city b is connected 
directly with city c, then city a is connected indirectly with city c.

A province is a group of directly or indirectly connected cities and no other cities outside of the group.

You are given an n x n matrix isConnected where isConnected[i][j] = 1 if the ith city and the jth city are directly connected, and 
isConnected[i][j] = 0 otherwise.

Return the total number of provinces.

Example 1:
Input: isConnected = [[1,1,0],[1,1,0],[0,0,1]]
Output: 2

Example 2:
Input: isConnected = [[1,0,0],[0,1,0],[0,0,1]]
Output: 3
*/

// first pass solution using DFS
var findCircleNum = function(isConnected) {
    let visited = new Set();
    let count = 0;
    let len = isConnected.length;
    
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            if (isConnected[i][j] === 1 && !visited.has(i) && !visited.has(j)) {
                dfs(isConnected, i, visited);
                count++;
            }
        }
    }
    return count;
}

var dfs = function(matrix, curr, visited) {
    if (!visited.has(curr)) {
        visited.add(curr);
        
        for (let i = 0; i < matrix[curr].length; i++) {
            if (matrix[curr][i] === 1) {
                dfs(matrix, i, visited);
            }
        }
    }
}
