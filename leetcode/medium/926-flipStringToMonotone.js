/*
A string of '0's and '1's is monotone increasing if it consists of some number of '0's (possibly 0), followed by some number of '1's 
(also possibly 0.)

We are given a string S of '0's and '1's, and we may flip any '0' to a '1' or a '1' to a '0'.

Return the minimum number of flips to make S monotone increasing.

Example 1:
Input: "00110"
Output: 1
Explanation: We flip the last digit to get 00111.

Example 2:
Input: "010110"
Output: 2
Explanation: We flip to get 011111, or alternatively 000111.

Example 3:
Input: "00011000"
Output: 2
Explanation: We flip to get 00000000.
*/

// first pass solution
var minFlipsMonoIncr = function(S) {
    let ones = new Array(S.length).fill(0); // count ones to left of current index that need to be flipped
    let zereos = new Array(S.length).fill(0); // count zereos to right of current index that need to be flipped
    let minFlipped = Infinity;
    
    for (let i = 1; i < S.length; i++) {
        if (S[i-1] === '1') {
            ones[i] = ones[i-1] + 1;
        } else {
            ones[i] = ones[i-1]
        }
    }
    for (let i = S.length - 2; i >= 0; i--) {
        if (S[i+1] === '0') {
            zereos[i] = zereos[i+1] + 1;
        } else {
            zereos[i] = zereos[i+1];
        }
    }
    
    for (let i = 0; i < S.length; i++) {
        minFlipped = Math.min(ones[i] + zereos[i], minFlipped) // find index where min amount of ones and zereos need to be flipped
    }
    return minFlipped;
};
