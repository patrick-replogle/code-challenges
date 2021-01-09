// You are given n pairs of numbers. In every pair, the first number is always smaller than the second number.

// Now, we define a pair (c, d) can follow another pair (a, b) if and only if b < c. Chain of pairs can be formed in this fashion.

// Given a set of pairs, find the length longest chain which can be formed. You needn't use up all the given pairs. You can select pairs in any order.

// Example 1:
// Input: [[1,2], [2,3], [3,4]]
// Output: 2
// Explanation: The longest chain is [1,2] -> [3,4]

// dynamic programming approach
var findLongestChain = function(pairs) {
    let dp = new Array(pairs.length).fill(1);
    pairs.sort((a, b) => a[0] - b[0]);
    
    for (let i = 0; i < pairs.length; i++) {
        for (let j = 0; j < i; j++) {
            if (pairs[j][1] < pairs[i][0]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
    }
    return Math.max(...dp);
};

// greedy solution
var findLongestChain = function(pairs) {
    let curr = -Infinity;
    let output = 0;
    pairs.sort((a, b) => a[1] - b[1]);
    
    for (let pair of pairs) {
        if (curr < pair[0]) {
            curr = pair[1];
            output++;
        }
    }
    return output;
};
