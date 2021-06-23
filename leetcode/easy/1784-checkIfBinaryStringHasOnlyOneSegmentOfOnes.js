/*
Given a binary string s without leading zeros, return true if s contains at most one contiguous segment of ones. Otherwise, return false.

Example 1:
Input: s = "1001"
Output: false
Explanation: The ones do not form a contiguous segment.
Example 2:

Input: s = "110"
Output: true
*/

// first pass solution
var checkOnesSegment = function(s) {
    let first = s.indexOf('1');
    let last = s.lastIndexOf('1');
    let i = first;
    
    while (s[i] === '1') i++;
    
    return i - 1 === last;
};
