// Given the positions of a white bishop and a black pawn on the standard chess board, determine whether the bishop 
// can capture the pawn in one move.

// The bishop has no restrictions in distance for each move, but is limited to diagonal movement. Check out the example 
// below to see how it can move:


function bishopAndPawn(bishop, pawn) {
    let x1 = bishop.charCodeAt(0)
    let x2 = bishop.charCodeAt(1)
    let y1 = pawn.charCodeAt(0) 
    let y2 = pawn.charCodeAt(1) 
    
    return Math.abs(x1 - y1) === Math.abs(x2 - y2);
}
