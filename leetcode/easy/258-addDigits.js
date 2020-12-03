// Given a non-negative integer num, repeatedly add all its digits until the result has only one digit.

// Example:

// Input: 38
// Output: 2 
// Explanation: The process is like: 3 + 8 = 11, 1 + 1 = 2. 
//              Since 2 has only one digit, return it.

// first pass solution
var addDigits = function(num) {
    while (String(num).length > 1) {
        num = eval(String(num).split("").join("+"));
    }
    return Number(num);
};

// second pass solution
var addDigits = function(num) {
    while (String(num).length > 1) {
        num = String(num);
        let sum = 0;
        
        for (let n of num) {
            sum += parseInt(n);
        }
        num = sum;
    }
    return parseInt(num);
};

// third pass recursive solution
var addDigits = function(num) {
    let sum = 0;
    
    for (let n of String(num)) {
        sum += parseInt(n);
    }
    
    if (String(sum).length > 1) {
        return addDigits(sum);
    } 
    return sum;
};
