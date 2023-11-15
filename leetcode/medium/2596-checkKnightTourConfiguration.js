var checkValidGrid = function(grid) {
    let positions = {};
    let yMoves = [2, 1, -1, -2, -2, -1, 1, 2];
    let xMoves = [1, 2, 2, 1, -1, -2, -2, -1];
    let maxMove = 0;
    let prevPosition = [0, 0];

    /** create a map which maps each move to it's coordinates on the board */
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            let move = grid[i][j];
            positions[move] = [i, j];
            maxMove = Math.max(maxMove, move);
        }
    }

    /** start position has to be the top left */
    if (positions[0][0] !== 0 || positions[0][1] !== 0) {
        return false;
    }

    /** check if each move/order of moves is valid */
    for (let i = 1; i <= maxMove; i++) {
        let currPosition = positions[i];
        let isValid = false;

        for (let j = 0; j < 8; j++) {
            if (
                (prevPosition[0] + yMoves[j]) === currPosition[0] && 
                (prevPosition[1] + xMoves[j]) === currPosition[1]) {
                isValid = true;
                break;
            }
        }

        if (!isValid) return false;

        prevPosition = currPosition;
    }
    

    return true;
};
