// Today, the bookstore owner has a store open for customers.length minutes.  Every minute, some number of customers (customers[i]) enter 
// the store, and all those customers leave after the end of that minute.

// On some minutes, the bookstore owner is grumpy.  If the bookstore owner is grumpy on the i-th minute, grumpy[i] = 1, otherwise grumpy[i] = 0.  
// When the bookstore owner is grumpy, the customers of that minute are not satisfied, otherwise they are satisfied.

// The bookstore owner knows a secret technique to keep themselves not grumpy for X minutes straight, but can only use it once.

// Return the maximum number of customers that can be satisfied throughout the day.

// Example 1:
// Input: customers = [1,0,1,2,1,1,7,5], grumpy = [0,1,0,1,0,1,0,1], X = 3
// Output: 16
// Explanation: The bookstore owner keeps themselves not grumpy for the last 3 minutes. 
// The maximum number of customers that can be satisfied = 1 + 1 + 1 + 1 + 7 + 5 = 16.

// first pass solution
var maxSatisfied = function(customers, grumpy, X) {
    let initialCount = 0;
    let finalCount = 0;
    
    for (let i = 0; i < customers.length; i++) {
        if (grumpy[i] === 0) {
            initialCount += customers[i]; // find initial count without adding X minutes
        }
    }
    
    for (let i = 0; i < customers.length - X + 1; i++) {
        let addedSum = initialCount; 
        for (let j = i; j < i + X; j++) {
            if (grumpy[j] === 1) {
                addedSum += customers[j]; // calculate all sliding window options of X minutes to find the max
            }
        }
        finalCount = Math.max(finalCount, addedSum)
    }
    return finalCount;
};

