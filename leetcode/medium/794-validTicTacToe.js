/*
A Tic-Tac-Toe board is given as a string array board. Return True if and only if it is possible to reach this board position 
during the course of a valid tic-tac-toe game.

The board is a 3 x 3 array, and consists of characters " ", "X", and "O".  The " " character represents an empty square.

Here are the rules of Tic-Tac-Toe:

Players take turns placing characters into empty squares (" ").
The first player always places "X" characters, while the second player always places "O" characters.
"X" and "O" characters are always placed into empty squares, never filled ones.
The game ends when there are 3 of the same (non-empty) character filling any row, column, or diagonal.
The game also ends if all squares are non-empty.
No more moves can be played if the game is over.

Example 1:
Input: board = ["O  ", "   ", "   "]
Output: false
Explanation: The first player always plays "X".

Example 2:
Input: board = ["XOX", " X ", "   "]
Output: false
Explanation: Players take turns making moves.

Example 3:
Input: board = ["XXX", "   ", "OOO"]
Output: false

Example 4:
Input: board = ["XOX", "O O", "XOX"]
Output: true
*/

// first pass solution
var validTicTacToe = function(board) {
    let o = 0; // count o's on board
    let x = 0; // count x's on board
    let oWins = 0; // count number of wins by o
    let xWins = 0; // count number of wins by x
    
    oWins += diagonalWin(board, 'O');
    xWins += diagonalWin(board, 'X');
    
    for (let row of board) {
        if (row === 'OOO') oWins++;
        else if (row === 'XXX') xWins++;
        for (let col of row) {
            if (col === 'O') o++;
            else if (col === 'X') x++;
        }
    }
    
    for (let j = 0; j < board.length; j++) {
        xWins += verticalWin(board, j, 'X')
        oWins += verticalWin(board, j, 'O') 
    }
    return validateBoard(o, x, oWins, xWins);
};
    
var verticalWin = function(board, j, player) {
    if (board[0][j] === player && board[1][j] === player && board[2][j] === player){
        return 1;
    }
    return 0;
}

var diagonalWin = function(board, player) {
    let wins = 0;
    if (board[0][0] === player && board[1][1] === player && board[2][2] === player) wins++;
    if (board[0][2] === player && board[1][1] === player && board[2][0] === player) wins++;
    return wins;
}

var validateBoard = function(o, x, oWins, xWins) {
    if (
        oWins >= 1 && xWins >= 1 || 
        xWins >= 1 && oWins >= 1 || 
        (xWins >= 1 && x === o) || 
        (oWins >= 1 && x > o) ||
        oWins > 2 || xWins > 2 || 
        x < o || x - o > 1
       ) {
        return false;
    }
    return true;
}
