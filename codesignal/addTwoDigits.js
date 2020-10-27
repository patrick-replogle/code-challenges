// You are given a two-digit integer n. Return the sum of its digits.

// Example

// For n = 29, the output should be
// addTwoDigits(n) = 11.

function addTwoDigits(n) {
    let sum = 0;
    
    for (let num of String(n)) {
        sum += Number(num);
    }
    return sum; 
}
