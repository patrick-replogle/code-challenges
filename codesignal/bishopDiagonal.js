// In the Land Of Chess, bishops don't really like each other. In fact, when two bishops happen to stand on the same diagonal, they immediately 
// rush towards the opposite ends of that same diagonal.

// Given the initial positions (in chess notation) of two bishops, bishop1 and bishop2, calculate their future positions. Keep in mind that 
// bishops won't move unless they see each other along the same diagonal.

// Example

// For bishop1 = "d7" and bishop2 = "f5", the output should be
// bishopDiagonal(bishop1, bishop2) = ["c8", "h3"].

// For bishop1 = "d8" and bishop2 = "b5", the output should be
// bishopDiagonal(bishop1, bishop2) = ["b5", "d8"].

// The bishops don't belong to the same diagonal, so they don't move.

// first pass solution that looks ugly, but passes all test cases
function bishopDiagonal(bishop1, bishop2) {
    let x1 = bishop1.charCodeAt(0);
    let x2 = bishop1.charCodeAt(1);
    let y1 = bishop2.charCodeAt(0);
    let y2 = bishop2.charCodeAt(1);
    // set of intergers representing tiles "a" thru "h" && "1" thru "9";
    let tilesUTF16 = new Set([49, 50, 51, 52, 53, 54, 55, 56, 97, 98, 99, 100, 101, 102, 103, 104]);
    
    // check if bishops on are on same diagonal path
    if (Math.abs(x1 - y1) === Math.abs(x2 - y2)) { 
        // bishop1 is top left
        if (x1 < y1 && x2 > y2) {
            while (tilesUTF16.has(x1 - 1) && tilesUTF16.has(x2 + 1)) { x1--, x2++ }
            while (tilesUTF16.has(y1 + 1) && tilesUTF16.has(y2 - 1)) { y1++, y2-- }
        // bishop1 is bottom right
        } else if (x1 < y1 && x2 < y2) {
            while (tilesUTF16.has(x1 - 1) && tilesUTF16.has(x2 - 1)) { x1--, x2-- }        
            while (tilesUTF16.has(y1 + 1) && tilesUTF16.has(y2 + 1)) { y1++, y2++ }
        // bishop1 is top right
        } else if (x1 > y1 && x2 > y2) {
            while (tilesUTF16.has(x1 + 1) && tilesUTF16.has(x2 + 1)) { x1++, x2++ }      
            while (tilesUTF16.has(y1 - 1) && tilesUTF16.has(y2 - 1)) { y1--, y2-- }
        }
        // bishop1 bottom right
        else if (x1 > y1 && x2 < y2) {
            while (tilesUTF16.has(x1 + 1) && tilesUTF16.has(x2 - 1)) { x1++, x2-- }           
            while (tilesUTF16.has(y1 - 1) && tilesUTF16.has(y2 + 1)) { y1--, y2++ }
        }
    }
    
    let b1FinalPosition = String.fromCharCode(x1) + String.fromCharCode(x2); // convert back to UTF16
    let b2FinalPosition = String.fromCharCode(y1) + String.fromCharCode(y2); // convert back to UTF16
    
    return [b1FinalPosition, b2FinalPosition].sort(); // return sorted array
}
