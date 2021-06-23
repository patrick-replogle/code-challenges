// Given an m x n 2d grid map of '1's (land) and '0's (water), return the number of islands.

// An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four 
// edges of the grid are all surrounded by water.

// first pass
var numIslands = function(grid) {
    let visited = [];
    let count = 0;
    
    for (let i = 0; i < grid.length; i++) {
        let temp = new Array(grid[0].length).fill(false);
        visited.push(temp);
    }
    
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (!visited[i][j] && grid[i][j] === "1") {
                dfs(i, j, grid, visited);
                count++;
            }
        }
    }
    return count;
};

var dfs = function(row, col, grid, visited) {
    let stack = [[row, col]];
    
    while (stack.length > 0) {
        let [r, c] = stack.pop();
        
        if (!visited[r][c]) {
            visited[r][c] = true;
            
            for (let neighbor of getNeighbors(r, c, grid)) {
                stack.push(neighbor);
            }
        }
    }
}

var getNeighbors = function(row, col, grid) {
    let neighbors = [];
    
    // north
    if (row > 0 && grid[row - 1][col] === "1") {
        neighbors.push([row-1, col])
    }
    // south
    if (row < grid.length - 1 && grid[row + 1][col] === "1") {
        neighbors.push([row + 1, col]);
    }
    // east
    if (col < grid[0].length - 1 && grid[row][col + 1] === "1") {
        neighbors.push([row, col + 1]);
    }
    // west
    if (col > 0 && grid[row][col-1] === "1") {
        neighbors.push([row, col-1]);
    }
    return neighbors;
}

// converted first pass solution to use a graph class
var numIslands = function(grid) {
    let graph = new Graph(grid)
    return graph.solve();
};

class Graph {
    constructor(grid, visited = [], count = 0) {
        this.grid = grid;
        this.visited = visited;
        this.count = count;
    }
    
    solve() {
        this.buildGraph();
        
        for (let i = 0; i < this.grid.length; i++) {
            for (let j = 0; j < this.grid[0].length; j++) {
                if (!this.visited[i][j] && this.grid[i][j] === "1") {
                    this.dfs(i, j);
                    this.count++;
                }
            }
        }
    return this.count;  
    }
    
    buildGraph() {
        for (let i = 0; i < this.grid.length; i++) {
            let temp = new Array(this.grid[0].length).fill(false);
            this.visited.push(temp);
        }
    }
    
    getNeighbors(row, col) {
        let neighbors = [];
        // north
        if (row > 0 && this.grid[row - 1][col] === "1") {
            neighbors.push([row-1, col])
        }
        // south
        if (row < this.grid.length - 1 && this.grid[row + 1][col] === "1") {
            neighbors.push([row + 1, col]);
        }
        // east
        if (col < this.grid[0].length - 1 && this.grid[row][col + 1] === "1") {
            neighbors.push([row, col + 1]);
        }
        // west
        if (col > 0 && this.grid[row][col-1] === "1") {
            neighbors.push([row, col-1]);
        }
        return neighbors;
    }
    
    dfs(row, col) {
        let stack = [[row, col]];
    
        while (stack.length > 0) {
            let [r, c] = stack.pop();
        
            if (!this.visited[r][c]) {
                this.visited[r][c] = true;
            
                for (let neighbor of this.getNeighbors(r, c, this.grid)) {
                    stack.push(neighbor);
                }
            }
        }
    }
}
