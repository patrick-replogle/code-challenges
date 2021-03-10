/*
For two strings s and t, we say "t divides s" if and only if s = t + ... + t  (t concatenated with itself 1 or more times)

Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.

Example 1:
Input: str1 = "ABCABC", str2 = "ABC"
Output: "ABC"

Example 2:
Input: str1 = "ABABAB", str2 = "ABAB"
Output: "AB"

Example 3:
Input: str1 = "LEET", str2 = "CODE"
Output: ""
*/

// first pass solution
var gcdOfStrings = function(str1, str2) {
    let [s1, s2] = [str1, str2].sort((a, b) => a.length - b.length);

    for (let i = s1.length; i >= 0; i--) {
        let prefix = s1.slice(0, i);
        let reg = new RegExp(prefix, 'g')
        let match1 = s1.replace(reg, '').length;
        let match2 = s2.replace(reg, '').length;
        if (match1 === 0 && match2 === 0) return prefix;
    }
    return '';
};
