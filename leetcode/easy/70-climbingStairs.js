// You are climbing a stair case. It takes n steps to reach to the top.

// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

// Example 1:

// Input: 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps
// Example 2:

// Input: 3
// Output: 3
// Explanation: There are three ways to climb to the top.
// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step

// recursive solution with memoization
let cache = {}

var climbStairs = function(n) {
    if (n in cache) return cache[n];
    if (n === 0) return 1;
    if (n < 0) return 0;
    
    let result = climbStairs(n - 1) + climbStairs(n - 2);
    cache[n] = result;
    
    return cache[n];
};

// solution 2
var climbStairs = function(n) {
    let result = [1, 2];
    
    if (n <= 2) return result[n - 1];
    
    for (let i = 2; i < n; i++) {
        result[i] = result[i - 1] + result[i - 2];
    }
    return result[result.length - 1];
};

// solution 3
var climbStairs = function(n) {
    if (n <= 2) return n;
    
    let a = 1;
    let b = 2;
        
    for (let i = 3; i <= n; i++) {
        let temp = b;
        b = a + b;
        a = temp;
    }
    return b;
};

// solution 4: using dynamic programming
var climbStairs = function(n) {   
    let dp = new Array(n).fill(0);
    dp[0] = 1;
    dp[1] = 2;
    
    for (let i = 2; i < n; i++) {
        dp[i] += dp[i -1];
        dp[i] += dp[i - 2];
    }
    return dp[n - 1];
};
