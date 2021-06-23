/*
Given a string s formed by digits ('0' - '9') and '#' . We want to map s to English lowercase characters as follows:

Characters ('a' to 'i') are represented by ('1' to '9') respectively.
Characters ('j' to 'z') are represented by ('10#' to '26#') respectively. 
Return the string formed after mapping.

It's guaranteed that a unique mapping will always exist.

Example 1:
Input: s = "10#11#12"
Output: "jkab"
Explanation: "j" -> "10#" , "k" -> "11#" , "a" -> "1" , "b" -> "2".

Example 2:
Input: s = "1326#"
Output: "acz"

Example 3:
Input: s = "25#"
Output: "y"
*/

// first pass solution
var freqAlphabets = function(s) {
    let output = '';
    let i = 0;
    
    while (i < s.length) {
        if (s[i+2] === '#') {
            output += String.fromCharCode(Number(s.slice(i, i+2)) + 96);
            i += 3;
        } else {
            output += String.fromCharCode(Number(s[i]) + 96);
            i++;
        }
    }
    return output;
};
