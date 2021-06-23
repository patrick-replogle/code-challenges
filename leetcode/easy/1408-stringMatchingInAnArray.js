/*
Given an array of string words. Return all strings in words which is substring of another word in any order. 

String words[i] is substring of words[j], if can be obtained removing some characters to left and/or right side of words[j].

Example 1:
Input: words = ["mass","as","hero","superhero"]
Output: ["as","hero"]
Explanation: "as" is substring of "mass" and "hero" is substring of "superhero".
["hero","as"] is also a valid answer.
*/

// first pass solution
var stringMatching = function(words) {
    let output = new Set();
    let seen = new Set();
    words.sort((a, b) => b.length - a.length);
    
    for (let word of words) {
        for (let w of seen) {
            if (w.includes(word)) {
                output.add(word);
            }
        }
        seen.add(word);
    }
    return [...output];
};

// second pass solution
var stringMatching = function(words) {
    let output = [];
    
    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        let str = [...words.slice(0, i), ...words.slice(i + 1)].join(' ');
        if (str.includes(word)) {
            output.push(word);
        }
    }
    return output;
};
