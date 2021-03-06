/*
Given an integer n, return 1 - n in lexicographical order.

For example, given 13, return: [1,10,11,12,13,2,3,4,5,6,7,8,9].

Please optimize your algorithm to use less time and space. The input size may be as large as 5,000,000.
*/

// first pass solution
var lexicalOrder = function(n) {
    let output = new Array(n);
    
    for (let i = 1; i <= n; i++) {
        output[i-1] = String(i);
    }
    return output.sort().map(str => Number(str));
};
