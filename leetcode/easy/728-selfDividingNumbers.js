// A self-dividing number is a number that is divisible by every digit it contains.

// For example, 128 is a self-dividing number because 128 % 1 == 0, 128 % 2 == 0, and 128 % 8 == 0.

// Also, a self-dividing number is not allowed to contain the digit zero.

// Given a lower and upper number bound, output a list of every possible self dividing number, including the bounds if possible.

// Example 1:
// Input: 
// left = 1, right = 22
// Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 15, 22]

// first pass solution
var selfDividingNumbers = function(left, right) {
    let output = [];
    
    for (let i = left; i <= right; i++) {
        let curr = String(i);
        let flag = true;
        for (let num of curr) {
            if (curr % num !== 0) {
                flag = false;
                break;
            } 
        }
        if (flag) output.push(i);
    }
    return output;
};
