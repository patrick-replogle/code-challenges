/*
Given two strings A and B of lowercase letters, return true if you can swap two letters in A so the result is equal to B, otherwise, return false.

Swapping letters is defined as taking two indices i and j (0-indexed) such that i != j and swapping the characters at A[i] and A[j]. For example, 
swapping at indices 0 and 2 in "abcd" results in "cbad".

Example 1:
Input: A = "ab", B = "ba"
Output: true
Explanation: You can swap A[0] = 'a' and A[1] = 'b' to get "ba", which is equal to B.

Example 2:
Input: A = "ab", B = "ab"
Output: false
Explanation: The only letters you can swap are A[0] = 'a' and A[1] = 'b', which results in "ba" != B.
*/

// first pass solution
var buddyStrings = function(A, B) {  
    if (A.length !== B.length) return false;
    if (A.split('').sort().join('') !== B.split('').sort().join('')) return false;
    
    if (A === B) {
        let count = {};
        for (let char of A) {
            if (!(char in count)) {
                count[char] = 0;
            }
            count[char]++;
            if (count[char] > 1) return true;
        }
        return false;
    } 
    else {
        let count = 0;
        for (let i = 0; i < A.length; i++) {
            if (A[i] !== B[i]) count++;
            if (count > 2) return false;
        }
        return true;
    }
};

// second pass solution
var buddyStrings = function(A, B) {  
    if (A.length !== B.length) return false;
    
    if (A === B) {
        let seen = new Set();
        for (let char of A) {
            if (seen.has(char)) return true;
            seen.add(char);
        }
        return false;
    } 
    else {
        let stackA = [];
        let stackB = [];
        
        for (let i = 0; i < A.length; i++) {
            if (A[i] !== B[i]) {
                stackA.push(A[i]);
                stackB.push(B[i]);
                if (stackA.length > 2) return false;
            }
        }
        return stackA[0] === stackB[1] && stackA[1] === stackB[0];
    }
};
