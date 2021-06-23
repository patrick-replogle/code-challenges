/*
Let's play the minesweeper game (Wikipedia, online game)!

You are given a 2D char matrix representing the game board. 'M' represents an unrevealed mine, 'E' represents an unrevealed empty square, 'B' 
represents a revealed blank square that has no adjacent (above, below, left, right, and all 4 diagonals) mines, digit ('1' to '8') represents 
how many mines are adjacent to this revealed square, and finally 'X' represents a revealed mine.

Now given the next click position (row and column indices) among all the unrevealed squares ('M' or 'E'), return the board after revealing this 
position according to the following rules:

If a mine ('M') is revealed, then the game is over - change it to 'X'.
If an empty square ('E') with no adjacent mines is revealed, then change it to revealed blank ('B') and all of its adjacent unrevealed squares 
should be revealed recursively.
If an empty square ('E') with at least one adjacent mine is revealed, then change it to a digit ('1' to '8') representing the number of adjacent mines.
Return the board when no more squares will be revealed.
 
Example 1:
Input: 

[['E', 'E', 'E', 'E', 'E'],
 ['E', 'E', 'M', 'E', 'E'],
 ['E', 'E', 'E', 'E', 'E'],
 ['E', 'E', 'E', 'E', 'E']]

Click : [3,0]

Output: 
[['B', '1', 'E', '1', 'B'],
 ['B', '1', 'M', '1', 'B'],
 ['B', '1', '1', '1', 'B'],
 ['B', 'B', 'B', 'B', 'B']]
 
 */
 
 // first pass solution using DFS
 var updateBoard = function(board, click) {
    let [x, y] = click;

    if (board[x][y] === 'M') {
        board[x][y] = 'X';
    } 
    else if (board[x][y] === 'E') {
        DFS(board, x, y);
    }
    return board;
};

var DFS = function(board, i, j) {
    if (i < 0 || i >= board.length || j < 0 || j >= board[0].length) return;
    if (board[i][j] !== 'E') return;
    
    let count = countMines(board, i, j);
    if (count > 0) return board[i][j] = count + '';
    else board[i][j] = 'B';
    
    DFS(board, i-1, j);
    DFS(board, i+1, j);
    DFS(board, i, j-1);
    DFS(board, i, j+1);
    DFS(board, i-1, j-1);
    DFS(board, i+1, j+1);
    DFS(board, i+1, j-1);
    DFS(board, i-1, j+1);
} 

var countMines = function(board, i, j) {
    const neighbors = [[i-1, j], [i+1, j], [i, j-1], [i, j+1], [i-1, j-1], [i+1, j+1], [i+1, j-1], [i-1, j+1]];
    let mineCount = 0;
    
    for (let [x, y] of neighbors) {
        if (x >= 0 && x <= board.length - 1 && y >= 0 && y <= board[0].length - 1) {
            if (board[x][y] === 'M') {
                mineCount++;
            }
        }
    }
    return mineCount;
}
