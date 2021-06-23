// Given a string s, determine if it is valid.

// A string s is valid if, starting with an empty string t = "", you can transform t into s after performing the following operation 
// any number of times:

// Insert string "abc" into any position in t. More formally, t becomes tleft + "abc" + tright, where t == tleft + tright. Note that 
// left and tright may be empty. Return true if s is a valid string, otherwise, return false.

// Example 1:
// Input: s = "aabcbc"
// Output: true
// Explanation:
// "" -> "abc" -> "aabcbc"
// Thus, "aabcbc" is valid.

// Example 2:
// Input: s = "abcabcababcc"
// Output: true
// Explanation:
// "" -> "abc" -> "abcabc" -> "abcabcabc" -> "abcabcababcc"
// Thus, "abcabcababcc" is valid.

// first pass solution
var isValid = function(s) {
    while (s.length) {
        if (s.includes('abc')) {
            s = s.replace('abc', '');
        } else {
            return false;
        }  
    }
    return true;
};
