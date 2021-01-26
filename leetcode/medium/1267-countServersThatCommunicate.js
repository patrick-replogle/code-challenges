// You are given a map of a server center, represented as a m * n integer matrix grid, where 1 means that on that cell there is a server 
// and 0 means that it is no server. Two servers are said to communicate if they are on the same row or on the same column.

// Return the number of servers that communicate with any other server.

// Example 1:
// Input: grid = [[1,0],[0,1]]
// Output: 0
// Explanation: No servers can communicate with others.

// Example 2:
// Input: grid = [[1,0],[1,1]]
// Output: 3
// Explanation: All three servers can communicate with at least one other server.

// first pass solution using two passes thru the grid and a couple of dictionaries to count servers in each row and col
var countServers = function(grid) {
    let rowCount = {};
    let colCount = {};
    let output = 0;
    
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === 1) {
                rowCount[i] ? rowCount[i]++ : rowCount[i] = 1;
                colCount[j] ? colCount[j]++ : colCount[j] = 1;
            }
        }
    }

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === 1 && (rowCount[i] > 1 || colCount[j] > 1)) {
                output++;
            }
        }
    }
    return output;
};
