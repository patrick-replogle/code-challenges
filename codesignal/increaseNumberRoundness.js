// Define an integer's roundness as the number of trailing zeroes in it.

// Given an integer n, check if it's possible to increase n's roundness by swapping some pair of its digits.

// Example

// For n = 902200100, the output should be
// increaseNumberRoundness(n) = true.

// One of the possible ways to increase roundness of n is to swap digit 1 with digit 0 preceding it: roundness of 902201000 is 3, and 
// roundness of n is 2.

// For instance, one may swap the leftmost 0 with 1.

// For n = 11000, the output should be
// increaseNumberRoundness(n) = false.

// Roundness of n is 3, and there is no way to increase it.

function increaseNumberRoundness(n) {
    n = n.toString().split("").reverse();
    let zeroesBefore = 0;
    let zeroesAfter = 0;
    let trailing = true;
    
    for (let num of n) {
        if (num !== "0") trailing = false;
        else if (trailing && num === "0") zeroesBefore++;
        else if (!trailing && num === "0") zeroesAfter++;
    }
    if (zeroesAfter > 0) return true;
    return false;
}
