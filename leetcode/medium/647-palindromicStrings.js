// Given a string, your task is to count how many palindromic substrings in this string.

// The substrings with different start indexes or end indexes are counted as different substrings even they consist of same characters.

// Example 1:

// Input: "abc"
// Output: 3
// Explanation: Three palindromic strings: "a", "b", "c".

// Example 2:

// Input: "aaa"
// Output: 6
// Explanation: Six palindromic strings: "a", "a", "a", "aa", "aa", "aaa".

// first pass solution
var countSubstrings = function(s) {
    let count = 0;
    
    for (let i = 0; i < s.length; i++) {
        // odd length palindroms
        let left = i;
        let right = i;
    
        while(left >= 0 && right < s.length && s[left] === s[right]) {
            left--;
            right++;
            count++;
        }
        // even length palindroms
        left = i; 
        right = i + 1;
        
        while(left >= 0 && right < s.length && s[left] === s[right]) {
            left--;
            right++;
            count++;
        }
    }
    return count;
};
