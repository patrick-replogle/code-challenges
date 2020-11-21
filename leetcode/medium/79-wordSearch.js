// Given an m x n board and a word, find if the word exists in the grid.

// The word can be constructed from letters of sequentially adjacent cells, where "adjacent" cells are horizontally or 
// vertically neighboring. The same letter cell may not be used more than once.

// Example 1:
// Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
// Output: true

// Example 2:
// Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "SEE"
// Output: true

// recursive solution using backtracking
const exist = function(board, word) {     
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (backtrack(board, word, i, j)) { 
                return true;
            }
        }
    }
    return false;
}

const backtrack = function(board, word, row, col) {
    if (word.length === 0) return true; // base case for a match
    if (row < 0 || row >= board.length) return false;
    if (col < 0 || col >= board[0].length) return false;
    
    if (board[row][col] === word[0]) { 
        board[row][col] = "#"; // avoid using same position on the board more than once
        
        let down = backtrack(board, word.slice(1), row + 1, col) 
        let up = backtrack(board, word.slice(1), row - 1, col) 
        let right = backtrack(board, word.slice(1), row, col + 1) 
        let left = backtrack(board, word.slice(1), row, col - 1)
        
        if (down || up || right || left) return true; // we found a match
        board[row][col] = word[0]; // backtrack and reset the position on board back to original state
    }
    return false;
}
