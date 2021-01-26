// Given an integer number n, return the difference between the product of its digits and the sum of its digits.
 
// Example 1:
// Input: n = 234
// Output: 15 
// Explanation: 
// Product of digits = 2 * 3 * 4 = 24 
// Sum of digits = 2 + 3 + 4 = 9 
// Result = 24 - 9 = 15

// Example 2:
// Input: n = 4421
// Output: 21
// Explanation: 
// Product of digits = 4 * 4 * 2 * 1 = 32 
// Sum of digits = 4 + 4 + 2 + 1 = 11 
// Result = 32 - 11 = 21

// first pass solution
var subtractProductAndSum = function(n) {
    let product = 0;
    let sum = 0;
    let str = n.toString();
    
    for (let i = 0; i < str.length; i++) {
        let num = Number(str[i]);
        if (i === 0) {
            product = num;
            sum = num;
        } else {
            product *= num;
            sum += num;
        }
    }
    return product - sum;
};
