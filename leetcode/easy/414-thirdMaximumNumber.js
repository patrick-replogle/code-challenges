// Given a non-empty array of integers, return the third maximum number in this array. If it does not exist, return the maximum 
// number. The time complexity must be in O(n).

// Example 1:
// Input: [3, 2, 1]

// Output: 1

// Explanation: The third maximum is 1.
// Example 2:
// Input: [1, 2]

// Output: 2

// Explanation: The third maximum does not exist, so the maximum (2) is returned instead.
// Example 3:
// Input: [2, 2, 3, 1]

// Output: 1

// Explanation: Note that the third maximum here means the third maximum distinct number.
// Both numbers with value 2 are both considered as second maximum.

// first pass solution => technically n log n time complexity because of the sort, but 78% faster than other solutions
var thirdMax = function(nums) {
    let set = new Set([...nums]);
    let arr = Array.from(set);
    
    if (set.size < 3) return Math.max(...arr);
    
    arr.sort((a, b) => a - b);
    
    return arr[arr.length - 3]
};

// second pass solution
var thirdMax = function(nums) {
    let set = new Set([...nums]);
    let arr = Array.from(set);
    
    if (set.size < 3) return Math.max(...arr);
    
    let firstMax = -Infinity;
    let secondMax = -Infinity;
    let thirdMax = -Infinity;
    
    for (let num of arr) {
        if (num > firstMax) {
            thirdMax = secondMax;
            secondMax = firstMax;
             firstMax = num;
        } else if (secondMax < num) {
            thirdMax = secondMax;
            secondMax = num;
        } else if (thirdMax < num) {
            thirdMax = num;
        }
    }
    return thirdMax;
};
