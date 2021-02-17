/*
In LeetCode Store, there are some kinds of items to sell. Each item has a price.

However, there are some special offers, and a special offer consists of one or more different kinds of items with a sale price.

You are given the each item's price, a set of special offers, and the number we need to buy for each item. The job is to output the 
lowest price you have to pay for exactly certain items as given, where you could make optimal use of the special offers.

Each special offer is represented in the form of an array, the last number represents the price you need to pay for this special offer, 
other numbers represents how many specific items you could get if you buy this offer.

You could use any of special offers as many times as you want.

Example 1:
Input: [2,5], [[3,0,5],[1,2,10]], [3,2]
Output: 14
Explanation: 
There are two kinds of items, A and B. Their prices are $2 and $5 respectively. 
In special offer 1, you can pay $5 for 3A and 0B
In special offer 2, you can pay $10 for 1A and 2B. 
You need to buy 3A and 2B, so you may pay $10 for 1A and 2B (special offer #2), and $4 for 2A.
*/

// first pass solution
var shoppingOffers = function(price, special, needs) {
    if (price.reduce((acc, el) => acc + el) === 0) return 0; // we spend no money if all items are free
    
    let min = Infinity;
    
    function recurse(moneySpent, currNeeds) {    
        if (currNeeds.reduce((acc, el) => acc + el) === 0) {
            return min = Math.min(min, moneySpent); // base case: all needed items have been purchased
        } 
        
        let flag = false; // flag to keep track of when we can't use any more specials and have to buy all leftover items individually
        
        for (let i = 0; i < special.length; i++) {
            let copy = []
            for (let j = 0; j < special[i].length - 1; j++) {
                let diff = currNeeds[j] - special[i][j];
                if (diff >= 0) {
                    copy.push(diff); // we can only use a special if all currNeeds - special are >= 0
                }
            }
            if (copy.length === currNeeds.length) {
                flag = true;  // we are still able to take a special
                recurse(moneySpent + special[i][special[i].length -1], copy);
            } 
        } 
        if (!flag) {
            for (let i = 0; i < price.length; i++) {
                moneySpent += price[i] * currNeeds[i]; // now we have to buy everything individually since we can't buy any more specials
            } 
            min = Math.min(min, moneySpent);
        }
    }
    recurse(0, [...needs], false);
    
    return min;
};
