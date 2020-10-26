// Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

// Each row must contain the digits 1-9 without repetition.
// Each column must contain the digits 1-9 without repetition.
// Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
// Note:

// A Sudoku board (partially filled) could be valid but is not necessarily solvable.
// Only the filled cells need to be validated according to the mentioned rules.

var isValidSudoku = function(board) {
    if (!checkRow(board)) {
        return false;
    }
    
    if (!checkCol(board)) {
        return false;
    }
    
    if (!checkBox(board)) {
        return false;
    }
    return true;
};

function checkRow(board) {
    let regex = /[0-9]/;
    
    for (let row of board) {
        let set = new Set();
        
        for (let col of row) {
            if (regex.test(col) && set.has(col)) {
                return false;
            } else {
                set.add(col)
            }
        }
    }
    return true;
}

function checkCol(board) {
    let regex = /[0-9]/;
    
    for (let i = 0; i < board[0].length; i++) {
        let set = new Set();
        let arr = [board[0][i],board[1][i], board[2][i],board[3][i], board[4][i], 
                  board[5][i], board[6][i], board[7][i], board[8][i]];
        
        for (let num of arr) {
            if (regex.test(num)) {
                if (set.has(num)) return false;
                else set.add(num);
            }  
        }
    }
    return true;
}

function checkBox(board) {
    let regex = /[0-9]/;

    for (let i = 1; i < board.length - 1; i += 3) {
        for (let j = 1; j < board[0].length - 1; j += 3) {
            let set = new Set();
            let arr = [board[i-1][j-1], board[i-1][j], board[i-1][j+1], board[i][j-1], board[i][j], 
                       board[i][j+1], board[i+1][j-1], board[i+1][j], board[i+1][j+1]];
            
            for (let num of arr) {
                if (regex.test(num)) {
                    if (set.has(num)) return false;
                    else set.add(num);
                }
            }
        }
    }
    return true;
}
