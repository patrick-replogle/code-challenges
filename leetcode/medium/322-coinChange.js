// You are given coins of different denominations and a total amount of money amount. Write a function to compute the fewest number of coins that
// you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.

// You may assume that you have an infinite number of each kind of coin.

// Example 1:

// Input: coins = [1,2,5], amount = 11
// Output: 3
// Explanation: 11 = 5 + 5 + 1
// Example 2:

// Input: coins = [2], amount = 3
// Output: -1
// Example 3:

// Input: coins = [1], amount = 0
// Output: 0
// Example 4:

// Input: coins = [1], amount = 1
// Output: 1
// Example 5:

// Input: coins = [1], amount = 2
// Output: 2

// first pass solution using BFS
var coinChange = function(coins, amount) {
    let queue = [[0, 0]] // [curr_amount, coin_count]
    let visited = new Set();
    
    while (queue.length > 0) {
        let [curr_amount, coin_count] = queue.shift();
        
        if (!visited.has(curr_amount)) {
            if (curr_amount === amount) return coin_count;
            
            visited.add(curr_amount);
            
            if (curr_amount < amount) {
                for (let coin of coins) {
                    queue.push([curr_amount + coin, coin_count + 1]);
                }
            }
            
        }
    }
    return -1;
 };
 
 // much faster dynamic programming approach
 var coinChange = function(coins, amount) {
    let dp = new Array(amount + 1).fill(Infinity);
    dp[0] = 0;
    
    for (let i = 1; i <= amount; i++) {
        for (let coin of coins) {
            if (i - coin >= 0) {
                dp[i] = Math.min(dp[i], dp[i-coin] + 1);
            }
        }
    }
    return (dp[amount] === Infinity ? -1 : dp[amount]);
};
