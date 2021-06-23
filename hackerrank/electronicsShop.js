/*
A person wants to determine the most expensive computer keyboard and USB drive that can be purchased with a give budget. Given price lists 
for keyboards and USB drives and a budget, find the cost to buy them. If it is not possible to buy both items, return -1.
*/

// first pass solution
function getMoneySpent(keyboards, drives, b) {
    let output = -1;
    
    for (let k of keyboards) {
        for (let d of drives) {
            if (k + d <= b) {
                output = Math.max(output, k + d);
            }
        }
    }
    return output;
}

// second pass solution
function getMoneySpent(keyboards, drives, b) {
    let output = -1;
    keyboards.sort((a, b) => a - b);
    drives.sort((a, b) => a - b);
    
    for (let k of keyboards) {
        if (k >= b) break;
        for (let d of drives) {
            if (k + d <= b) {
                output = Math.max(output, k + d);
            } else {
                break;
            }
        }
    }
    return output;
}
