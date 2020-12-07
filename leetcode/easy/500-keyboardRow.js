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
