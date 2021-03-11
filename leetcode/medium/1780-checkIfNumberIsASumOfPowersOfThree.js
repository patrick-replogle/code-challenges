/*
Given an integer n, return true if it is possible to represent n as the sum of distinct powers of three. Otherwise, return false.

An integer y is a power of three if there exists an integer x such that y == 3x.

Example 1:
Input: n = 12
Output: true
Explanation: 12 = 31 + 3

Example 2:
Input: n = 91
Output: true
Explanation: 91 = 30 + 32 + 34

Example 3:
Input: n = 21
Output: false
*/

// first pass solution
var checkPowersOfThree = function(n) {
    let flag = false;
    
    function recurse(curr, power) {
        if (curr === n) return flag = true;
        if (curr > n || power > 15) return;
        
        recurse(curr + (Math.pow(3, power)), power + 1);
        recurse(curr, power + 1);
    }
    recurse(0, 0);
    
    return flag;
};
