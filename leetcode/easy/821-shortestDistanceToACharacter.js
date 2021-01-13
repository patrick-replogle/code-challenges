// Given a string S and a character C, return an array of integers representing the shortest distance from the character C in the string.

// Example 1:

// Input: S = "loveleetcode", C = 'e'
// Output: [3, 2, 1, 0, 1, 0, 0, 1, 2, 2, 1, 0]
 
// Note:

// S string length is in [1, 10000].
// C is a single character, and guaranteed to be in string S.
// All letters in S and C are lowercase.

// first pass solution
var shortestToChar = function(S, C) {
    let arr = [];
    let output = [];
    
    for (let i = 0; i < S.length; i++) {
        if (S[i] === C) {
            arr.push(i);
        }
    }
    
    for (let i = 0; i < S.length; i++) {
        if (S[i] === C) {
            output.push(0);
        } else {
            let min = Infinity;
            for (let j = 0; j < arr.length; j++) {
                if (min < Math.abs(i - arr[j])) break;
                else min = Math.min(min, Math.abs(i - arr[j]));
            }
            output.push(min);
        }
    }
    return output;
};
