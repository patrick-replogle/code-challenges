// Given a string and a string dictionary, find the longest string in the dictionary that can be formed by deleting some characters of 
// the given string. If there are more than one possible results, return the longest word with the smallest lexicographical order. If 
// there is no possible result, return the empty string.

// Example 1:
// Input:
// s = "abpcplea", d = ["ale","apple","monkey","plea"]

// Output: 
// "apple"
// Example 2:
// Input:
// s = "abpcplea", d = ["a","b","c"]

// Output: 
// "a"

// first pass solution
var findLongestWord = function(s, d) {
    let results = [];
    
    for (let word of d) {
        let i = 0;
        for (let char of s) {
            if (char === word[i]) i++;
        }
        if (i === word.length) results.push(word);
    }
    
    results.sort((a, b) => b.length - a.length || a.localeCompare(b) - b.localeCompare(a));
    
    if (results.length === 0) return "";
    else return results[0];
};
