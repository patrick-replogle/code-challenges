// Given a List of words, return the words that can be typed using letters of alphabet on only one row's of American keyboard like the image below.
 
// Example:

// Input: ["Hello", "Alaska", "Dad", "Peace"]
// Output: ["Alaska", "Dad"]

// first pass solution using regex 
var findWords = function(words) {
    let top = /^[qwertyuiop]+$/;
    let middle = /^[asdfghjkl]+$/;
    let bottom = /^[zxcvbnm]+$/;
    let results = [];
    
    for (let word of words) {
        curr = word.toLowerCase();
        if (curr.match(top) || curr.match(middle) || curr.match(bottom)) {
            results.push(word)
        }
    }
    return results;
};

// second pass solution using sets and a nested loop to count chars
var findWords = function(words) {
    let top = new Set(["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"]);
    let middle = new Set(["a", "s", "d", "f", "g", "h", "j", "k", "l"]);
    let bottom = new Set(["z", "x", "c", "v", "b", "n", "m"]);
    let results = [];
    
    for (let word of words) {
        curr = word.toLowerCase();
        let tLen = 0;
        let mLen = 0;
        let bLen = 0;
        
        for (let char of curr) {
            if (top.has(char)) tLen++;
            if (middle.has(char)) mLen++;
            if (bottom.has(char)) bLen++;
        }
        
        if (tLen === word.length || mLen === word.length || bLen === word.length) {
            results.push(word);
        }
    }
    return results;
};
