// You have a total of n coins that you want to form in a staircase shape, where every k-th row must have exactly k coins.

// Given n, find the total number of full staircase rows that can be formed.

// n is a non-negative integer and fits within the range of a 32-bit signed integer.

// Example 1:

// n = 5

// The coins can form the following rows:
// ¤
// ¤ ¤
// ¤ ¤

// Because the 3rd row is incomplete, we return 2.
// Example 2:

// n = 8

// The coins can form the following rows:
// ¤
// ¤ ¤
// ¤ ¤ ¤
// ¤ ¤

// Because the 4th row is incomplete, we return 3.

// first pass solution
var arrangeCoins = function(n) {
    let rows = 0;
    
    for (let i = 1; i <= n; i++) {
        n -= i;
        
        if (n === 0) return i;
        else if (n < 0) break;
        else rows++;
    }
    return rows;
};

// second pass solution
var arrangeCoins = function(n) {
    let count = 1;
    
    while (n >= count) {
        n -= count;     
        count++;
    }
    return count - 1;
};
