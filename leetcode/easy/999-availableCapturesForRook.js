/*
On an 8 x 8 chessboard, there is exactly one white rook 'R' and some number of white bishops 'B', black pawns 'p', and empty squares '.'.

When the rook moves, it chooses one of four cardinal directions (north, east, south, or west), then moves in that direction until it chooses 
to stop, reaches the edge of the board, captures a black pawn, or is blocked by a white bishop. A rook is considered attacking a pawn if the 
rook can capture the pawn on the rook's turn. The number of available captures for the white rook is the number of pawns that the rook is 
attacking.

Return the number of available captures for the white rook.

Example 1:
Input: board = [[".",".",".",".",".",".",".","."],
                [".",".",".","p",".",".",".","."],
                [".",".",".","R",".",".",".","p"],
                [".",".",".",".",".",".",".","."],
                [".",".",".",".",".",".",".","."],
                [".",".",".","p",".",".",".","."],
                [".",".",".",".",".",".",".","."],
                [".",".",".",".",".",".",".","."]]
Output: 3
Explanation: In this example, the rook is attacking all the pawns.
*/

// first pass solution
var numRookCaptures = function(board) {
    let rook = null;
    let captures = 0;
    
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            if (board[i][j] === 'R') {
                rook = [i, j];
                break;
            }
        }
        if (rook) break;
    }
    
    let row = rook[0];
    
    while (row >= 0 && board[row][rook[1]] !== 'B') {
        if (board[row][rook[1]] === 'p') {
            captures++;
            break;
        }
        row--;
    }
    
    row = rook[0];
    
    while (row < board.length && board[row][rook[1]] !== 'B') {
        if (board[row][rook[1]] === 'p') {
            captures++;
            break;
        }
        row++;
    }
    
    let col = rook[1];
    
    while (col >= 0 && board[rook[0]][col] !== 'B') {
        if (board[rook[0]][col] === 'p') {
            captures++;
            break;
        }
        col--;
    }
    
    col = rook[1];
    
    while (col < board[0].length && board[rook[0]][col] !== 'B') {
        if (board[rook[0]][col] === 'p') {
            captures++;
            break;
        }
        col++;
    }
    
    return captures;
};
