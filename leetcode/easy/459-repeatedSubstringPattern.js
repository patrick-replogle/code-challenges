// Given a non-empty string check if it can be constructed by taking a substring of it and appending multiple copies of the substring together. 
// You may assume the given string consists of lowercase English letters only and its length will not exceed 10000.

// Example 1:

// Input: "abab"
// Output: True
// Explanation: It's the substring "ab" twice.
// Example 2:

// Input: "aba"
// Output: False
// Example 3:

// Input: "abcabcabcabc"
// Output: True
// Explanation: It's the substring "abc" four times. (And the substring "abcabc" twice.)

// first pass brute force solution
var repeatedSubstringPattern = function(s) {
    for (let i = 1; i <= s.length / 2; i++) {
        let curr = s.slice(0, i);
        let j = 2;
        
        while (curr.repeat(j).length < s.length) {
            j++;
            if (curr.repeat(j) === s) return true;
        }
    }
    return false;
};

// second pass solution that slightly optimizes code
var repeatedSubstringPattern = function(s) {
    for (let i = 1; i <= s.length / 2; i++) {
        let curr = s.slice(0, i);
        let multBy = Math.floor(s.length / curr.length);
        if (curr.repeat(multBy) === s) {
            return true;
        }
    }
    return false;
};
