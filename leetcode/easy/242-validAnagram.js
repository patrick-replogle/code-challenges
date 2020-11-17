// Given two strings s and t , write a function to determine if t is an anagram of s.

// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:

// Input: s = "rat", t = "car"
// Output: false
// Note:
// You may assume the string contains only lowercase alphabets.

// Follow up:
// What if the inputs contain unicode characters? How would you adapt your solution to such case?

// first pass solution
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false;
    
    let dictS = {};
    let dictT = {};
    
    for (let i = 0; i < s.length; i++) {
        if (!(s[i] in dictS)) dictS[s[i]] = 0;
        if (!(t[i] in dictT)) dictT[t[i]] = 0;
        dictS[s[i]] += 1;
        dictT[t[i]] += 1;
    }
    
    for (let key in dictS) {
        if (!(key in dictT) || dictS[key] !== dictT[key]) {
            return false;
        }
    }
    return true;
};
