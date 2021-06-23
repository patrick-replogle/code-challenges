/*
A string s is nice if, for every letter of the alphabet that s contains, it appears both in uppercase and lowercase. For example, "abABB" is nice 
because 'A' and 'a' appear, and 'B' and 'b' appear. However, "abA" is not because 'b' appears, but 'B' does not.

Given a string s, return the longest substring of s that is nice. If there are multiple, return the substring of the earliest occurrence. If there 
are none, return an empty string.

Example 1:
Input: s = "YazaAay"
Output: "aAa"
Explanation: "aAa" is a nice string because 'A/a' is the only letter of the alphabet in s, and both 'A' and 'a' appear.
"aAa" is the longest nice substring.

Example 2:
Input: s = "Bb"
Output: "Bb"
Explanation: "Bb" is a nice string because both 'B' and 'b' appear. The whole string is a substring.
*/

// first pass solution => brute force, but somehow 100% faster and 100% less memory than other JS submissions
var longestNiceSubstring = function(s) {
    let dict = {};
    let options = [];
    
    for (let i = 0; i < s.length; i++) {
        let set = new Set();
        let str = s[i];
        set.add(s[i])
        for (let j = i + 1; j < s.length; j++) {
            str += s[j];
            set.add(s[j]);
            let flag = true;
            
            for (let char of str) {
                if (!set.has(char.toUpperCase()) || !set.has(char.toLowerCase())) {
                    flag = false;
                    break;
                }
            }
            if (flag) options.push(str);
        }
    }
    if (options.length) {
        return options.sort((a, b) => b.length - a.length)[0];
    }
    return '';
};
