/*
Boggle is a popular word game in which players attempt to find words in sequences of adjacent letters on a rectangular board.

Given a two-dimensional array board that represents the character cells of the Boggle board and an array of unique strings words, find all 
the possible words from words that can be formed on the board.

Note that in Boggle when you're finding a word, you can move from a cell to any of its 8 neighbors, but you can't use the same cell twice in 
one word.

Example

For

board = [
    ['R', 'L', 'D'],
    ['U', 'O', 'E'],
    ['C', 'S', 'O']
]
and words = ["CODE", "SOLO", "RULES", "COOL"], the output should be
wordBoggle(board, words) = ["CODE", "RULES"].
*/

// first pass solution
function wordBoggle(board, words) {
    if (!board.length || !words.length) return [];
    
    let set = new Set(words);
    let output = new Set();
    let maxLenWord = words.sort((a, b) => b.length - a.length)[0].length;
    
    
    
    function dft(board, i, j, visited, path) {
        if (i < 0 || i > board.length - 1 || j < 0 || j > board[0].length - 1) return;
        if (visited.has(`${i}:${j}`)) return;
        if (path.length > maxLenWord) return;
        
        path += board[i][j];
        visited.add(`${i}:${j}`);
        if (set.has(path)) output.add(path);
        
        dft(board, i-1, j, visited, path);
        dft(board, i+1, j, visited, path);
        dft(board, i, j-1, visited, path);
        dft(board, i, j+1, visited, path);
        dft(board, i-1, j-1, visited, path);
        dft(board, i+1, j+1, visited, path);
        dft(board, i-1, j+1, visited, path);
        dft(board, i+1, j-1, visited, path);
        visited.delete(`${i}:${j}`);  
}
    
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            dft(board, i, j, new Set(), '');
        }
    }
    return Array.from(output).sort();
}
