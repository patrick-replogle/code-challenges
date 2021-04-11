/*
An integer d is a divisor of an integer n if the remainder of n % d === 0.
Given an integer, for each digit that makes up the integer determine whether it is a divisor. Count the number of divisors occurring within the integer.
*/

// first pass solution
function findDigits(n) {
    let str = String(n);
    let output = 0;

    for (let digit of str) {
        if (n % Number(digit) === 0) {
            output++;
        }
    }
    return output;
}
