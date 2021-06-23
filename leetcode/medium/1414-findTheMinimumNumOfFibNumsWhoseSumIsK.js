/*
Given an integer k, return the minimum number of Fibonacci numbers whose sum is equal to k. The same Fibonacci number can be 
used multiple times.

The Fibonacci numbers are defined as:

F1 = 1
F2 = 1
Fn = Fn-1 + Fn-2 for n > 2.
It is guaranteed that for the given constraints we can always find such Fibonacci numbers that sum up to k.
 

Example 1:
Input: k = 7
Output: 2 
Explanation: The Fibonacci numbers are: 1, 1, 2, 3, 5, 8, 13, ... 
For k = 7 we can use 2 + 5 = 7.

Example 2:
Input: k = 10
Output: 2 
Explanation: For k = 10 we can use 2 + 8 = 10.
*/

// first pass solution => brute force using recursion
var findMinFibonacciNumbers = function(k) {
    let fibs = calculateFibs(k);
    let min = Infinity;
    
    function recurse(currSum, index, currCount) {
        if (currSum < 0 || index < 0) return;
        else if (currSum === 0) min = Math.min(currCount, min);
        else if (currSum - fibs[index] >= 0 && currCount + 1 < min) {
            recurse(currSum - fibs[index], index, currCount + 1);
        } else {
            recurse(currSum, index - 1, currCount);
        }
    }
    
    for (let i = fibs.length - 1; i >= 0; i--) {
        recurse(k - fibs[i], i, 1);
    }
    
    return min;
};

var calculateFibs = function(k) {
    let fibs = [1];
    let prev = 1;
    let prevPrev = 1;
    
    while (prev + prevPrev <= k) {
        let nextFib = prev + prevPrev;
        prevPrev = prev;
        prev = nextFib;
        fibs.push(nextFib);
    }
    return fibs;
}
