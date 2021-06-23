/*
Given a string s, the power of the string is the maximum length of a non-empty substring that contains only one unique character.

Return the power of the string.

Example 1:
Input: s = "leetcode"
Output: 2
Explanation: The substring "ee" is of length 2 with the character 'e' only.

Example 2:
Input: s = "abbcccddddeeeeedcba"
Output: 5
Explanation: The substring "eeeee" is of length 5 with the character 'e' only.
*/

// first pass solution
var maxPower = function(s) {
    let power = 0;
    let i = 0;
    
    while (i < s.length) {
        let currChar = s[i];
        let start = i;
        while(s[i+1] === currChar) {
            i++;
        }
        power = Math.max(power, i - start + 1)
        i++;
    }
    return power;
};
