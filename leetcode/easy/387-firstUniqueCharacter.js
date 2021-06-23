/*
Given a string, find the first non-repeating character in it and return its index. If it doesn't exist, return -1.

Examples:

s = "leetcode"
return 0.

s = "loveleetcode"
return 2.
*/

// first pass solution
var firstUniqChar = function(s) {
    let count = {};
    
    for (let char of s) {
        count[char] ? count[char] += 1 : count[char] = 1;
    }
    
    for (let i = 0; i < s.length; i++) {
        if (count[s[i]] === 1) {
            return i;
        }
    }
    return -1;
};
