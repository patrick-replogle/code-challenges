/*
Given a string s containing only lower case English letters and the '?' character, convert all the '?' characters into lower case 
letters such that the final string does not contain any consecutive repeating characters. You cannot modify the non '?' characters.

It is guaranteed that there are no consecutive repeating characters in the given string except for '?'.

Return the final string after all the conversions (possibly zero) have been made. If there is more than one solution, return any of 
them. It can be shown that an answer is always possible with the given constraints.

Example 1:
Input: s = "?zs"
Output: "azs"
Explanation: There are 25 solutions for this problem. From "azs" to "yzs", all are valid. Only "z" is an invalid modification as the 
string will consist of consecutive repeating characters in "zzs".
*/

// first pass solution
var modifyString = function(s) {
    let charCode = 97;
    let arr = s.split('');
    
    arr.forEach((char, i) => {
        if (char === '?') {
            while (String.fromCharCode(charCode) === arr[i-1] || 
                   String.fromCharCode(charCode) === arr[i+1]) 
            {
                charCode++;
            }
            arr[i] = String.fromCharCode(charCode);
        }
        charCode = 97;
    });
    return arr.join('');
};
