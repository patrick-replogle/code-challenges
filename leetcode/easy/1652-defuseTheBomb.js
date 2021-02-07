/*
You have a bomb to defuse, and your time is running out! Your informer will provide you with a circular array code of length of n and a key k.

To decrypt the code, you must replace every number. All the numbers are replaced simultaneously.

If k > 0, replace the ith number with the sum of the next k numbers.
If k < 0, replace the ith number with the sum of the previous k numbers.
If k == 0, replace the ith number with 0.
As code is circular, the next element of code[n-1] is code[0], and the previous element of code[0] is code[n-1].

Given the circular array code and an integer key k, return the decrypted code to defuse the bomb!

Example 1:

Input: code = [5,7,1,4], k = 3
Output: [12,10,16,13]
Explanation: Each number is replaced by the sum of the next 3 numbers. The decrypted code is [7+1+4, 1+4+5, 4+5+7, 5+7+1]. Notice 
that the numbers wrap around.
*/

// first pass solution
var decrypt = function(code, k) {
    if (k === 0) return new Array(code.length).fill(0);
    
    let output = new Array(code.length).fill(0);
    
    for (let i = 0; i < code.length; i++) {
        let m = Math.abs(k);
        let sum = 0;
        
        if (k > 0) {
            let j = i + 1;
            while (m > 0) {
                if (j === code.length) j = 0;
                sum += code[j];
                m--;
                j++;
            }
        } 
        else if (k < 0) {
            let j = i - 1;
            while (m > 0) {
                if (j < 0) j = code.length - 1;
                sum += code[j];
                m--;
                j--;
            }
        }
        output[i] = sum;
    }
    return output;
};
