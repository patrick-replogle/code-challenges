/*
Say you have an array prices for which the ith element is the price of a given stock on day i.

Design an algorithm to find the maximum profit. You may complete as many transactions as you like (i.e., buy one and sell one share of 
the stock multiple times).

Note: You may not engage in multiple transactions at the same time (i.e., you must sell the stock before you buy again).

Example 1:
Input: [7,1,5,3,6,4]
Output: 7
Explanation: Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 5-1 = 4.
             Then buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6-3 = 3.
             
Example 2:
Input: [1,2,3,4,5]
Output: 4
Explanation: Buy on day 1 (price = 1) and sell on day 5 (price = 5), profit = 5-1 = 4.
             Note that you cannot buy on day 1, buy on day 2 and sell them later, as you are
             engaging multiple transactions at the same time. You must sell before buying again.
*/

// first pass solution => greedy
var maxProfit = function(prices) {
    let profit = 0;
    
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] > prices[i-1]) {
            profit += prices[i] - prices[i-1];
        }
    }
    return profit;
};

// second pass solution
var maxProfit = function(prices) {
    let i = 0;
    let profit = 0;
    
    while (i < prices.length) {
        while (i < prices.length && prices[i] >= prices[i+1]) {
            i++;
        }
        let buyPrice = prices[i];
        i++;
        
        while (i < prices.length && prices[i+1] > prices[i]) {
            i++;
        }
        if (i < prices.length) {
            profit += prices[i] - buyPrice;
        }
        i++;
    }
    return profit;
};
             
             
