/*
For a non-negative integer X, the array-form of X is an array of its digits in left to right order.  For example, if X = 1231, then the 
array form is [1,2,3,1].

Given the array-form A of a non-negative integer X, return the array-form of the integer X+K.

Example 1:
Input: A = [1,2,0,0], K = 34
Output: [1,2,3,4]
Explanation: 1200 + 34 = 1234

Example 2:
Input: A = [2,7,4], K = 181
Output: [4,5,5]
Explanation: 274 + 181 = 455

Example 3:
Input: A = [2,1,5], K = 806
Output: [1,0,2,1]
Explanation: 215 + 806 = 1021
*/

// first pass solution
var addToArrayForm = function(A, K) {
    let output = [];
    let carry = 0;
    let i = A.length - 1;
    
    while (i >= 0 || K > 0) {
        let digit = K > 0 ? K % 10 : 0;
        let num = i >= 0 ? A[i] : 0;
        let next = digit + carry + num;
 
        if (next <= 9) {
            output.push(next)
            carry = 0;
        }
        else {
            output.push(next % 10);
            carry = Math.floor(next / 10);
        }
        i--;
        K = Math.floor(K / 10);
    }
    if (carry > 0) output.push(carry);
    
    return output.reverse();
};

// second pass solution
var addToArrayForm = function(A, K) {
    let carry = 0;
    let i = A.length - 1;
    
    while (i >= 0) {
        let digit = K > 0 ? K % 10 : 0;
        let num = i >= 0 ? A[i] : 0;
        let next = digit + carry + num;
 
        if (next <= 9) {
            A[i] = next
            carry = 0;
        }
        else {
            A[i] = next % 10;
            carry = Math.floor(next / 10);
        }
        i--;
        K = Math.floor(K / 10);
    }
    K += carry;
    
    if (K > 0) {
        let str = String(K);
        for (let i = str.length - 1; i >= 0; i--) {
            A.unshift(Number(str[i]));
        }
    }
    return A;
};
