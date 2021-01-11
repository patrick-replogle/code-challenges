// Given two integers L and R, find the count of numbers in the range [L, R] (inclusive) having a prime number of set bits in their binary representation.

// (Recall that the number of set bits an integer has is the number of 1s present when written in binary. For example, 21 written in binary is 10101 which 
// has 3 set bits. Also, 1 is not a prime.)

// Example 1:

Input: L = 6, R = 10
Output: 4
Explanation:
6 -> 110 (2 set bits, 2 is prime)
7 -> 111 (3 set bits, 3 is prime)
9 -> 1001 (2 set bits , 2 is prime)
10->1010 (2 set bits , 2 is prime)

// fist pass solution using basic memoization
var countPrimeSetBits = function(L, R) {
    let primes = new Set();
    let output = 0;
    
    for (let i = L; i <= R; i++) {
        let curr = i.toString(2).replace(/0/g, '').length;
        if (primes.has(curr)) output++;
        else if (isPrime(curr)) {
            primes.add(curr);
            output++;
        }
    }
    return output;
};

var isPrime = function(num) {
    if (num === 1) return false;
    if (num === 2) return true;
    
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}


