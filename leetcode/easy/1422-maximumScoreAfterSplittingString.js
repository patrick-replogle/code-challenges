/*
Given a string s of zeros and ones, return the maximum score after splitting the string into two non-empty substrings 
(i.e. left substring and right substring).

The score after splitting a string is the number of zeros in the left substring plus the number of ones in the right substring.

Example 1:
Input: s = "011101"
Output: 5 
Explanation: 
All possible ways of splitting s into two non-empty substrings are:
left = "0" and right = "11101", score = 1 + 4 = 5 
left = "01" and right = "1101", score = 1 + 3 = 4 
left = "011" and right = "101", score = 1 + 2 = 3 
left = "0111" and right = "01", score = 1 + 1 = 2 
left = "01110" and right = "1", score = 2 + 1 = 3
*/

// first pass solution 
var maxScore = function(s) {
    let output = -Infinity;
    let ones = 0;
    let zeroes = new Array(s.length).fill(0); // DP array to count zereos
    if (s[0] === '0') zeroes[0] = 1;
    
    for (let i = 1; i < s.length - 1; i++) {
        if (s[i] === '0') zeroes[i] += 1;
        zeroes[i] += zeroes[i - 1]; // count all zeroes to the left of and including the current index
    }
    
    for (let i = s.length - 1; i >= 1; i--) {
        if (s[i] === '1') ones++; // loop backwards thru string and count all ones
        output = Math.max(output, ones + zeroes[i - 1]); // add all ones to the right and zeroes to the left at each iteration
    }
    return output;
};
