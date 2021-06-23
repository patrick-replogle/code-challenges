// Given a word, you need to judge whether the usage of capitals in it is right or not.

// We define the usage of capitals in a word to be right when one of the following cases holds:

// All letters in this word are capitals, like "USA".
// All letters in this word are not capitals, like "leetcode".
// Only the first letter in this word is capital, like "Google".
// Otherwise, we define that this word doesn't use capitals in a right way.

// Example 1:

// Input: "USA"
// Output: True

// Example 2:

// Input: "FlaG"
// Output: False

var detectCapitalUse = function(word) {  
    if (word.toUpperCase() === word) return true;
    if (word.toLowerCase() === word) return true;
    
    let copy = word.toLowerCase().split("")
    copy[0] = copy[0].toUpperCase();
    if (copy.join("") === word) return true;
    
    return false;
};
