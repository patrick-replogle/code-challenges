/*
Given a string s consisting only of characters a, b and c.

Return the number of substrings containing at least one occurrence of all these characters a, b and c.

Example 1:
Input: s = "abcabc"
Output: 10
Explanation: The substrings containing at least one occurrence of the characters a, b and c are "abc", "abca", "abcab", 
"abcabc", "bca", "bcab", "bcabc", "cab", "cabc" and "abc" (again). 

Example 2:
Input: s = "aaacb"
Output: 3
Explanation: The substrings containing at least one occurrence of the characters a, b and c are "aaacb", "aacb" and "acb". 

Example 3:
Input: s = "abc"
Output: 1
*/

// first pass solution
var numberOfSubstrings = function(s) {
    let output = 0;
    
    for (let i = 0; i < s.length - 2; i++) {
        let a = false;
        let b = false;
        let c = false;
        for (let j = i; j < s.length; j++) {
            if (s[j] === 'a') a = true;
            else if (s[j] === 'b') b = true;
            else if (s[j] === 'c') c = true;
            if (a && b && c) {
                output += s.length - j;
                break;
            }
        }
    }
    return output;
};

// second pass solution using sliding window
var numberOfSubstrings = function(s) {
    let count = [0, 0, 0]; // ['a', 'b', 'c']
    let output = 0; 
    let i = 0;
    let j = 0;
    
    while ( i < s.length - 2 && j < s.length) {
        count[s[j].charCodeAt(0) - 97]++; 
        if (count[0] > 0 && count[1] > 0 && count[2] > 0) {
            output += s.length - j;
            count[s[i].charCodeAt(0) - 97]--;
            i++;
            while (count[0] > 0 && count[1] > 0 && count[2] > 0) {
                output += s.length - j;
                count[s[i].charCodeAt(0) - 97]--;
                i++;
            }
        } 
        j++;
    }
    return output;
};
