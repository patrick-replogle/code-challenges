var winnerOfGame = function(colors) {
    let a = 0
    let b = 0;
    
    for (let i = 1; i < colors.length; i++) {
        if (colors[i] === colors[i-1] && colors[i] === colors[i+1]) {
            if (colors[i] === 'A') a++;
            else b++;
        }
    }
    
    if (a > b) return true;
    return false;
};
