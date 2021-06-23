// Given an 2D board, count how many battleships are in it. The battleships are represented with 'X's, empty slots are represented with '.'s. 
// You may assume the following rules:
// You receive a valid board, made of only battleships or empty slots.
// Battleships can only be placed horizontally or vertically. In other words, they can only be made of the shape 1xN (1 row, N columns) or 
// Nx1 (N rows, 1 column), where N can be of any size.
// At least one horizontal or vertical cell separates between two battleships - there are no adjacent battleships.

// Example:

// X..X
// ...X
// ...X

// In the above board there are 2 battleships.

// first pass solution using adjacency matrix and dft
const countBattleships = function(board) {
    let count = 0;
    let visited = new Array(board.length).fill()
        .map(row => new Array(board[0].length).fill(false)); 
    
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            if (!visited[i][j] && board[i][j] === "X") {
                dft(board, visited, i, j);
                count++;
            }
        }
    }
    return count;
};

const dft = function(board, visited, i, j) {
    let stack = [[i, j]];
    
    while (stack.length > 0) {
        let [row, col] = stack.pop();
        
        if (!visited[row][col]) {
            visited[row][col] = true;
            
            for (let neighbor of getNeighbors(board, row, col)) {
                stack.push(neighbor);
            }
        }
    }
}

const getNeighbors = function(board, i, j) {
    let neighbors = [];
    // north
    if (i > 0 && board[i-1][j] === "X") {
        neighbors.push([i-1, j]);
    }
    // south
    if (i < board.length - 1 && board[i+1][j] === "X") {
        neighbors.push([i+1, j]);
    }
    // east 
    if (j < board[0].length - 1 && board[i][j+1] === "X") {
        neighbors.push([i, j+1])
    }
    // west 
    if (j > 0 && board[i][j-1] === "X") {
        neighbors.push([i, j-1]);
    }
    return neighbors;
}

// second pass solution using constant memory and one pass
const countBattleships = function(board) {
    let count = 0;
    
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            if (board[i][j] === "X") {
                if (i === 0 || i > 0 && board[i-1][j] !== "X") {
                    if (j === 0 || j > 0 && board[i][j-1] !== "X") {
                        count++;
                    }
                }
            }
        }
    }
    return count;
};
