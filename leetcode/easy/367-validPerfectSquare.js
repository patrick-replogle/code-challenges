// Given a positive integer num, write a function which returns True if num is a perfect square else False.

// Follow up: Do not use any built-in library function such as sqrt.

// Example 1:

// Input: num = 16
// Output: true
// Example 2:

// Input: num = 14
// Output: false

// first pass solution
var isPerfectSquare = function(num) {
    for (let i = 1; i <= num; i++) {
        if (i * i === num) return true;
    }
    return false;
};

// second pass using binary search
var isPerfectSquare = function(num) {
    let low = 1;
    let high = num;
    
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        
        if (mid * mid === num) return true;
        else if (mid * mid < num) low = mid + 1;
        else if (mid * mid > num) high = mid - 1;
    }
    return false;
};
