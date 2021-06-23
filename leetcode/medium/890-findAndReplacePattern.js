// You have a list of words and a pattern, and you want to know which words in words matches the pattern.

// A word matches the pattern if there exists a permutation of letters p so that after replacing every letter x in the pattern with p(x), we 
// get the desired word.

// (Recall that a permutation of letters is a bijection from letters to letters: every letter maps to another letter, and no two letters map 
// to the same letter.)

// Return a list of the words in words that match the given pattern. 

// You may return the answer in any order.

// Example 1:
// Input: words = ["abc","deq","mee","aqq","dkd","ccc"], pattern = "abb"
// Output: ["mee","aqq"]
// Explanation: "mee" matches the pattern because there is a permutation {a -> m, b -> e, ...}. 
// "ccc" does not match the pattern because {a -> c, b -> c, ...} is not a permutation,
// since a and b map to the same letter.

// first pass solution
var findAndReplacePattern = function(words, pattern) {
    let output = [];
    
    for (let word of words) {
        let map1 = {};
        let map2 = {};
        let flag = true;
        
        for (let i = 0; i < word.length; i++) {
            let patternChar = pattern[i];
            let wordChar = word[i];
            
            if (!(patternChar in map1)) map1[patternChar] = wordChar;
            if (!(wordChar in map2)) map2[wordChar] = patternChar;
            if (map1[patternChar] !== wordChar || map2[wordChar] !== patternChar) {
                flag = false;
            }
        }
        if (flag) output.push(word)
    }
    return output;
};

