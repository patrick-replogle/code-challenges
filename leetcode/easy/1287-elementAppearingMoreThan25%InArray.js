// Given an integer array sorted in non-decreasing order, there is exactly one integer in the array that occurs more than 25% of the time.

// Return that integer.

// Example 1:
// Input: arr = [1,2,2,6,6,6,6,7,10]
// Output: 6

// first pass solution
var findSpecialInteger = function(arr) {
    let target = Math.floor(arr.length * .25);
    let dict = {};
    
    for (let num of arr) {
        dict[num] ? dict[num] += 1 : dict[num] = 1;
        if (dict[num] > target) {
            return num;
        }
    }
    return -1;
};
