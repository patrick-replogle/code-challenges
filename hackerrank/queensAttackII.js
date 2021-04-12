/*
You will be given a square chess board with one queen and a number of obstacles placed on it. Determine how many squares the queen can attack.

A queen is standing on an  chessboard. The chess board's rows are numbered from  to , going from bottom to top. Its columns are numbered from  to , 
going from left to right. Each square is referenced by a tuple, , describing the row, , and column, , where the square is located.

The queen is standing at position . In a single move, she can attack any square in any of the eight directions (left, right, up, down, and the four 
diagonals). 
*/

// first pass solution
function queensAttack(n, k, r_q, c_q, obstacles) {
    let set = new Set();
    let [x, y] = [r_q, c_q];
    let output = 0;
    
    obstacles.forEach(([a, b]) => set.add(`${a}:${b}`));
    
    for (let i = x + 1; i <= n; i++) { // n
        if(set.has(`${i}:${y}`)) break;
        output++;
    }
    
    for (let i = x - 1; i >= 1; i--) { // s
        if(set.has(`${i}:${y}`)) break;
        output++;
    }
    
    for (let j = y - 1; j >= 1; j--) { // w
        if(set.has(`${x}:${j}`)) break;
        output++;
    }
    
    for (let j = y + 1; j <= n; j++) { // e
        if(set.has(`${x}:${j}`)) break;
        output++;
    }
    
    while (x <= n && y >= 1) { // nw
        x++;
        y--;
        if (set.has(`${x}:${y}`) || x > n || y < 1) break;
        output++;
    }
    
    [x,y] = [r_q, c_q];
    
    while (x >= 1 && y <= n) { // se
        x--;
        y++;
        if (set.has(`${x}:${y}`) || x < 1 || y > n) break;
        output++;
    }
    
    [x,y] = [r_q, c_q];
    
    while (x <= n && y <= n) { // ne
        x++;
        y++;
        if (set.has(`${x}:${y}`) || x > n || y > n) break;
        output++;
    }
    
    [x,y] = [r_q, c_q];
    
    while (x >= 1 && y >= 1) { // sw
        x--;
        y--;
        if (set.has(`${x}:${y}`) || x < 1 || y < 1) break;
        output++;
    }
    return output;
}
