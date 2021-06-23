// You have n tiles, where each tile has one letter tiles[i] printed on it.

// Return the number of possible non-empty sequences of letters you can make using the letters printed on those tiles.

// Example 1:
// Input: tiles = "AAB"
// Output: 8
// Explanation: The possible sequences are "A", "B", "AA", "AB", "BA", "AAB", "ABA", "BAA".

// Example 2:
// Input: tiles = "AAABBC"
// Output: 188

// Example 3:
// Input: tiles = "V"
// Output: 1

// first pass solution using recursive to create all permutations of the string while also using a set to avoid duplicates
var numTilePossibilities = function(tiles) {
    let set = new Set();
    
    function permute(tiles, path) {
        if (path.length > 0) {
            set.add(path);
        }
        
        for (let i = 0; i < tiles.length; i++) {
            permute(tiles.slice(0, i) + tiles.slice(i + 1), path + tiles[i])
        }
    }
    permute(tiles, '');

    return set.size;
};
