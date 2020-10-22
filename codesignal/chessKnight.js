// Given a position of a knight on the standard chessboard, find the number of different moves the knight can perform.

// The knight can move to a square that is two squares horizontally and one square vertically, or two squares vertically 
// and one square horizontally away from it. The complete move therefore looks like the letter L. Check out the image 
// below to see all valid moves for a knight piece that is placed on one of the central squares.

function chessKnight(cell) {
    // all possible moves
    let a = String.fromCharCode(cell.charCodeAt(0) + 1) + String.fromCharCode(cell.charCodeAt(1) + 2);
    let b = String.fromCharCode(cell.charCodeAt(0) + 2) + String.fromCharCode(cell.charCodeAt(1) + 1);
    let c = String.fromCharCode(cell.charCodeAt(0) - 1) + String.fromCharCode(cell.charCodeAt(1) + 2);
    let d = String.fromCharCode(cell.charCodeAt(0) - 2) + String.fromCharCode(cell.charCodeAt(1) + 1);
    let e = String.fromCharCode(cell.charCodeAt(0) - 2) + String.fromCharCode(cell.charCodeAt(1) - 1);
    let f = String.fromCharCode(cell.charCodeAt(0) - 1) + String.fromCharCode(cell.charCodeAt(1) - 2);
    let g = String.fromCharCode(cell.charCodeAt(0) + 1) + String.fromCharCode(cell.charCodeAt(1) - 2);
    let h = String.fromCharCode(cell.charCodeAt(0) + 2) + String.fromCharCode(cell.charCodeAt(1) - 1);
    
    // store moves in array and loop over each and use the validChars set to determine which of the moves is valid or out of bounds
    let validChars = new Set(["a", "b", "c", "d", "e", "f", "g", "h", "1", "2", "3", "4", "5", "6", "7", "8"]);
    let moves = [a, b, c, d, e, f, g, h];
    let count = 0;
    
    for (let move of moves) {
        if (validChars.has(move[0]) && validChars.has(move[1])) {
            count++;
        }
    }
    return count;
}
