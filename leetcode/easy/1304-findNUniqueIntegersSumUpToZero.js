// Given an integer n, return any array containing n unique integers such that they add up to 0.

// Example 1:
// Input: n = 5
// Output: [-7,-1,1,3,4]
// Explanation: These arrays also are accepted [-5,-1,1,2,3] , [-3,-1,2,-2,4].

// Example 2:
// Input: n = 3
// Output: [-1,0,1]
// Example 3:
// Input: n = 1
// Output: [0]

// first pass solution
var sumZero = function(n) {
    let half = Math.floor(n / 2);
    let output = n % 2 === 0 ? [] : [0];
    
    for (let i = 1; i <= half; i++) {
        output.push(i);
        output.push(-i)
    }
    return output;
};

// second pass solution
var sumZero = function(n) {
    let half = Math.floor(n / 2);
    let output = new Array(n).fill(0);
    let index = 0;
    
    if (n % 2 !== 0) index++;
    
    for (let i = 1; i <= half; i++) {
        output[index] = i;
        output[index + 1] = -i;
        index += 2;
    }
    return output;
};
