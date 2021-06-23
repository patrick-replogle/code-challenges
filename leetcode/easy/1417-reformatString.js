/*
Given alphanumeric string s. (Alphanumeric string is a string consisting of lowercase English letters and digits).

You have to find a permutation of the string where no letter is followed by another letter and no digit is followed by another digit. 
That is, no two adjacent characters have the same type.

Return the reformatted string or return an empty string if it is impossible to reformat the string.

Example 1:
Input: s = "a0b1c2"
Output: "0a1b2c"
Explanation: No two adjacent characters have the same type in "0a1b2c". "a0b1c2", "0a1b2c", "0c2a1b" are also valid permutations.

Example 2:
Input: s = "leetcode"
Output: ""
Explanation: "leetcode" has only characters so we cannot separate them by digits.
*/

// first pass solution
var reformat = function(s) {
    let numbers = s.replace(/[a-z]/gi, '');
    let chars = s.replace(/[0-9]/g, '');
    let output = '';
    
    if (numbers.length === chars.length) {
        for (let i = 0; i < numbers.length; i++) {
            output += chars[i];
            output += numbers[i];
        }
    }
    else if (numbers.length === chars.length - 1) {
        for (let i = 0; i < numbers.length; i++) {
            output += chars[i];
            output += numbers[i];
        }
        output += chars[chars.length - 1];
    }
    else if (chars.length === numbers.length - 1) {
        for (let i = 0; i < chars.length; i++) {
            output += numbers[i];
            output += chars[i];
        }
        output += numbers[numbers.length - 1];
    }
    else {
        output = ''; 
    }
    return output;  
};
