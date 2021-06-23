/*
Given a binary string s and an integer k.

Return True if every binary code of length k is a substring of s. Otherwise, return False.

Example 1:
Input: s = "00110110", k = 2
Output: true
Explanation: The binary codes of length 2 are "00", "01", "10" and "11". They can be all found as substrings at indicies 0, 1, 3 and 2 respectively.

Example 2:
Input: s = "00110", k = 2
Output: true
*/

// first pass solution
var hasAllCodes = function(s, k) {
    let set = new Set();
    let numberOfKDigitNums = 2**k;

    for (let i = 0; i <= s.length - k; i++) {
        set.add(s.substring(i, i + k));
    }
    return set.size === numberOfKDigitNums;
};
