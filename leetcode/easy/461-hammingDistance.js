/*
The Hamming distance between two integers is the number of positions at which the corresponding bits are different.

Given two integers x and y, calculate the Hamming distance.

Note:
0 ≤ x, y < 231.

Example:

Input: x = 1, y = 4

Output: 2

Explanation:
1   (0 0 0 1)
4   (0 1 0 0)
       ↑   ↑

The above arrows point to positions where the corresponding bits are different.
*/

// first pass solution
var hammingDistance = function(x, y) {
    let a = x.toString(2);
    let b = y.toString(2);
    let diff = Math.abs(a.length - b.length);
    let distance = 0;
    
    if (diff !== 0) {
        if (a.length < b.length) a = '0'.repeat(diff) + a;
        else b = '0'.repeat(diff) + b;
    }
    
    for (let i = 0; i < a.length; i++) {
        if ((a[i] === '1' && b[i] === '0') || (a[i] === '0' && b[i] === '1')) {
            distance++;
        }
    }
    return distance;
};

// second pass solution
var hammingDistance = function(x, y) {
    return (x ^ y).toString(2).split('').reduce((acc, el) => acc + Number(el), 0);
};
