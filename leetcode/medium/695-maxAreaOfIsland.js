// Given a non-empty 2D array grid of 0's and 1's, an island is a group of 1's (representing land) connected 4-directionally (horizontal or vertical.) 
// You may assume all four edges of the grid are surrounded by water.

// Find the maximum area of an island in the given 2D array. (If there is no island, the maximum area is 0.)

// Example 1:

// [[0,0,1,0,0,0,0,1,0,0,0,0,0],
//  [0,0,0,0,0,0,0,1,1,1,0,0,0],
//  [0,1,1,0,1,0,0,0,0,0,0,0,0],
//  [0,1,0,0,1,1,0,0,1,0,1,0,0],
//  [0,1,0,0,1,1,0,0,1,1,1,0,0],
//  [0,0,0,0,0,0,0,0,0,0,1,0,0],
//  [0,0,0,0,0,0,0,1,1,1,0,0,0],
//  [0,0,0,0,0,0,0,1,1,0,0,0,0]]
// Given the above grid, return 6. Note the answer is not 11, because the island must be connected 4-directionally.
// Example 2:

// [[0,0,0,0,0,0,0,0]]
// Given the above grid, return 0.
// Note: The length of each dimension in the given grid does not exceed 50.

// first pass solution using dfs to count area of each island within the grid
var maxAreaOfIsland = function(grid) {
    let maxArea = 0;
    let visited = new Array(grid.length).fill().map(() => new Array(grid[0].length).fill(0));
    
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === 1 && visited[i][j] === 0) {
                let currArea = dfs(grid, visited, i, j);
                maxArea = Math.max(maxArea, currArea);
            }
        }
    }
    return maxArea;
};

var dfs = function(grid, visited, i, j) {
    let area = 0;
    let stack = [[i, j]];
    
    while (stack.length) {
        let [x, y] = stack.pop();
        
        if (x < 0 || x > grid.length - 1 || y < 0 || y > grid[0].length - 1) continue;
        if (visited[x][y] === 1 || grid[x][y] === 0) continue;
        
        area++;
        visited[x][y] = 1;
        
        stack.push([x-1, y]);
        stack.push([x+1, y]);
        stack.push([x, y-1]);
        stack.push([x, y+1]);
    }
    return area;
}
