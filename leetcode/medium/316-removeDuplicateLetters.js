// Given a string s, remove duplicate letters so that every letter appears once and only once. You must make sure your result is the 
// smallest in lexicographical order among all possible results.

// Note: This question is the same as 1081: https://leetcode.com/problems/smallest-subsequence-of-distinct-characters/

// Example 1:

// Input: s = "bcabc"
// Output: "abc"
// Example 2:

// Input: s = "cbacdcbc"
// Output: "acdb"

// clever solution using a stack
var removeDuplicateLetters = function(s) {
    let stack = [];
    let seen = new Set();
    let charCount = {};
    
    for (let char of s) {
        if (!(char in charCount)) {
            charCount[char] = 0;
        }
        charCount[char]++;
    }
    
    for (let char of s) {
        charCount[char]--;
        
        if (seen.has(char)) continue;
        
        while (char < stack[stack.length - 1] && charCount[stack[stack.length-1]] > 0) {
            seen.delete(stack.pop());
        }
            
        stack.push(char);
        seen.add(char);
    }
    return stack.join("");
}
