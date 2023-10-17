var solveNQueens = function(n) {
    let output = [];

    solve(createBoard(n), n, n, output, 0);

    return output;
};

var solve = function(board, n, count, output, row) {
    if (count === 0) return output.push(board.map(row => row.join('')));

    for (let j = 0; j < n; j++) {
        if (isValidMove(board, row, j, n)) { 
            board[row][j] = 'Q';
            solve(board, n, count - 1, output, row + 1)
            board[row][j] = '.';
        } 
    }
}

var createBoard = function(n) {
    return Array.from(new Array(n)).map(() => new Array(n).fill('.'))
}

var isValidMove = function(board, row, col, n) {
    if (board[row][col] === 'Q') return false;
    // check column
    for (let i = 0; i < n; i++) {
        if (i === row) continue;
        if (board[i][col] === 'Q') return false;
    }
    // check diagonal
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (i === row && j === col) continue;
            if (board[i][j] === 'Q' && Math.abs(i - row) === Math.abs(j - col)) return false;
        }
    }

    return true;
}
