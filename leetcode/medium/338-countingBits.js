// Given a non negative integer number num. For every numbers i in the range 0 ≤ i ≤ num calculate the number of 1's in their binary 
// representation and return them as an array.

// Example 1:

// Input: 2
// Output: [0,1,1]
// Example 2:

// Input: 5
// Output: [0,1,1,2,1,2]

// first pass naive solution
var countBits = function(num) {
    let result = [];
    
    for (let i = 0; i <= num; i++) {
        let curr = i.toString(2);
        let count = 0;
        
        for (let bit of curr) {
            if (bit === "1") count++;
        }
        result.push(count);
    }
    return result;
};
