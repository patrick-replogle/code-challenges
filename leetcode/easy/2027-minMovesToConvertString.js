var minimumMoves = function(s) {
    let i = 0;
    let moves = 0;
    
    while (i < s.length) {
        if (s[i] === 'X') {
            moves++;
            i += 2;
        }
        i++;
    }
    return moves;
};
