/*
Given two strings s and t, check if s is a subsequence of t.

A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters 
without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

Example 1:
Input: s = "abc", t = "ahbgdc"
Output: true

Example 2:
Input: s = "axc", t = "ahbgdc"
Output: false
*/

// first pass solution
var isSubsequence = function(s, t) {
    let j = 0;
    
    for (let char of t) {
        if (char === s[j]) j++;
    }
    return j === s.length;
};
