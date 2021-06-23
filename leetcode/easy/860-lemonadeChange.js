At a lemonade stand, each lemonade costs $5. 

// Customers are standing in a queue to buy from you, and order one at a time (in the order specified by bills).

// Each customer will only buy one lemonade and pay with either a $5, $10, or $20 bill.  You must provide the correct change to each customer, 
// so that the net transaction is that the customer pays $5.

// Note that you don't have any change in hand at first.

// Return true if and only if you can provide every customer with correct change.

// Example 1:
// Input: [5,5,5,10,20]
// Output: true

// Example 2:
// Input: [5,5,10]
// Output: true

// first pass solution
var lemonadeChange = function(bills) {
    let till = { 'five': 0, 'ten': 0, 'twenty': 0 }
    
    for (let bill of bills) {
        if (bill === 5) {
            till.five += 1;
        }
        else if (bill === 10) {
            if (till.five < 1) return false;
            till.five -= 1;
            till.ten += 1;
        }
        else if (bill === 20) {
            till.twenty += 1;
            if (till.five >= 1 && till.ten >= 1) {
                till.five -= 1;
                till.ten -=1;
            } else if (till.five >= 3) {
                till.five -= 3;
            } else {
                return false;
            }
        }
    }
    return true;
};

// refactor of first pass solution
var lemonadeChange = function(bills) {
    let five = 0;
    let ten = 0;
    
    for (let bill of bills) {
        if (bill === 5) {
            five++;
        }
        else if (bill === 10) {
            if (five < 1) return false;
            five--;
            ten++;
        }
        else if (bill === 20) {
            if (five >= 1 && ten >= 1) {
                five--;
                ten--;
            } else if (five >= 3) {
                five -= 3;
            } else {
                return false;
            }
        }
    }
    return true;
};



