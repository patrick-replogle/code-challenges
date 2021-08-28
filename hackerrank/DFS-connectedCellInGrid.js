// first pass solution
function maxRegion(grid) {
    let output = 0;
    
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] == 1) {
                output = Math.max(output, DFS(grid, i, j));
            }
        }
    }
    return output;
}

function DFS(grid, i, j) {
    if (i < 0 || i >= grid.length || j < 0 || j >= grid[0].length) return 0;
    if (grid[i][j] != 1) return 0;
    
    let res = 0;
    grid[i][j] = '#';
    
    let directions = [[0, -1], [0, 1], [-1, 0], [1, 0], [1, 1], [-1, -1], [-1, 1], [1, -1]];
        
    for (let [row, col] of directions) {
        res += DFS(grid, i + row, j + col);
    }

    return res + 1;
}
