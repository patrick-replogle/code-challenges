// Given an array of strings strs, group the anagrams together. You can return the answer in any order.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all 
// the original letters exactly once.

// Example 1:

// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
// Example 2:

// Input: strs = [""]
// Output: [[""]]
// Example 3:

// Input: strs = ["a"]
// Output: [["a"]]

// first pass solution
var groupAnagrams = function(strs) {
    let dict = {};
    
    for (let str of strs) {
        let temp = str.split("").sort().join("");
        if (!(temp in dict)) {
            dict[temp] = [str];
        } else {
            dict[temp].push(str);
        }
    }
    return Object.values(dict);
};
