// Given a string array words, find the maximum value of length(word[i]) * length(word[j]) where the two words do not share common letters. 
// You may assume that each word will contain only lower case letters. If no such two words exist, return 0.

// Example 1:

// Input: ["abcw","baz","foo","bar","xtfn","abcdef"]
// Output: 16 
// Explanation: The two words can be "abcw", "xtfn".
// Example 2:

// Input: ["a","ab","abc","d","cd","bcd","abcd"]
// Output: 4 
// Explanation: The two words can be "ab", "cd".
// Example 3:

// Input: ["a","aa","aaa","aaaa"]
// Output: 0 
// Explanation: No such pair of words.

// first pass brute force solution
var maxProduct = function(words) {
    let max = 0;
    
    for (let i = 0; i < words.length - 1; i++) {
        let set1 = new Set(words[i]);
        
        for (let j = i + 1; j < words.length; j++) {
            let set2 = new Set(words[j]);
            let unique = true;

            for (let char of set2) {
                if (set1.has(char)) {
                    unique = false;
                    break;
                };
            }
            if (unique) {
                max = Math.max(max, words[i].length * words[j].length);
            }
        }
    } 
    return max;
};

// slight variation on original idea
var maxProduct = function(words) {
    let max = 0;
    
    for (let i = 0; i < words.length - 1; i++) {
        let set1 = new Set(words[i]);
        
        for (let j = i + 1; j < words.length; j++) {
            let set2 = new Set(words[j]);
            let set3 = new Set([...set1, ...set2])
            
            if (set3.size === set1.size + set2.size) {
                max = Math.max(max, words[i].length * words[j].length);
            } 
        }
    }  
    return max;
};
