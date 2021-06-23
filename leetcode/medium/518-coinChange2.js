/*
You are given coins of different denominations and a total amount of money. Write a function to compute the number of combinations 
that make up that amount. You may assume that you have infinite number of each kind of coin.

Example 1:
Input: amount = 5, coins = [1, 2, 5]
Output: 4
Explanation: there are four ways to make up the amount:
5=5
5=2+2+1
5=2+1+1+1
5=1+1+1+1+1

Example 2:
Input: amount = 3, coins = [2]
Output: 0
Explanation: the amount of 3 cannot be made up just with coins of 2.

Example 3:
Input: amount = 10, coins = [10] 
Output: 1
*/

// first pass solution
var change = function(amount, coins) {
    let dict = {};
    
    function compute(currSum, index) {
        if (currSum === 0) return 1
        if (currSum < 0 || !coins[index]) return 0;
        if (`${currSum}:${index}` in dict) return dict[`${currSum}:${index}`];
        
        let sum = 0;
        
        for (let i = index; i < coins.length; i++) {
            if (currSum - coins[i] >= 0) {
                sum += compute(currSum - coins[i], i);
            }
        }
        dict[`${currSum}:${index}`] = sum;

        return dict[`${currSum}:${index}`];
    }
    compute(amount, coins.length - 1);
    
    return compute(amount, 0);
};
