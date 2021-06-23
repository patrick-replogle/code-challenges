// Given a non-empty array of non-negative integers nums, the degree of this array is defined as the maximum frequency of any one of its elements.

// Your task is to find the smallest possible length of a (contiguous) subarray of nums, that has the same degree as nums.

// Example 1:

// Input: nums = [1,2,2,3,1]
// Output: 2
// Explanation: 
// The input array has a degree of 2 because both elements 1 and 2 appear twice.
// Of the subarrays that have the same degree:
// [1, 2, 2, 3, 1], [1, 2, 2, 3], [2, 2, 3, 1], [1, 2, 2], [2, 2, 3], [2, 2]
// The shortest length is 2. So return 2.

// first pass brute force solution that times out
var findShortestSubArray = function(nums) {
    let max = 0;
    let output = Infinity;
    let count = {};
    
    for (let num of nums) {
        if (!(num in count)) count[num] = 0;
        count[num]++;
        if (count[num] > max) max = count[num];
    }
    
    for (let i = 0; i < nums.length; i++) {
        let curr = 0;
        let dict = {};
        for (let j = i; j < nums.length; j++) {
            if (!(nums[j] in dict)) dict[nums[j]] = 0;
            dict[nums[j]]++;
            curr++;
            if (dict[nums[j]] === max) {
                output = Math.min(output, curr);
            }
        }
    }
    return output;
};

// second pass linear solution using multiple passes
var findShortestSubArray = function(nums) {
    let degree = 0;
    let output = Infinity;
    let count = {};
    let degreeValues = [];
    
    for (let num of nums) {
        if (!(num in count)) count[num] = 0;
        count[num]++;
        if (count[num] > degree) degree = count[num];
    }
    
    for (let num of nums) {
        if (count[num] === degree) degreeValues.push(num);
    }
    
    for (let num of degreeValues) {
        output = Math.min(output, nums.lastIndexOf(num) - nums.indexOf(num) + 1)
    }
    
    return output;
};
