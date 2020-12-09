// Given an array of integers, 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.

// Find all the elements that appear twice in this array.

// Could you do it without extra space and in O(n) runtime?

// Example:
// Input:
// [4,3,2,7,8,2,3,1]

// Output:
// [2,3]

// first solution using a set to store seen nums
var findDuplicates = function(nums) {
    let seen = new Set();
    let output = [];
    
    for (let num of nums) {
        if (seen.has(num)) output.push(num);
        seen.add(num);
    }
    return output;
}

// same concept, but using a dictionary instead of a set
var findDuplicates = function(nums) {
    let dict = {};
    let output = [];
    
    for (let num of nums) {
        if (!(num in dict)) dict[num] = 0;
        dict[num]++;     
        if (dict[num] > 1) output.push(num);
    }
    return output;
}
