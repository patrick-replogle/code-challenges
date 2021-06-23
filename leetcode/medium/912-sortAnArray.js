// Given an array of integers nums, sort the array in ascending order.

// Example 1:
// Input: nums = [5,2,3,1]
// Output: [1,2,3,5]

// Example 2:
// Input: nums = [5,1,1,2,0,0]
// Output: [0,0,1,1,2,5]

// first pass solution using merge sort
var sortArray = function(nums) {
    return mergeSort(nums);
};

var mergeSort = function(nums) {
    if (nums.length <= 1) return nums;
    
    let mid = Math.floor(nums.length / 2);
    let left = mergeSort(nums.slice(0, mid));
    let right = mergeSort(nums.slice(mid));
    
    return merge(left, right);
}

var merge = function(left, right) {
    let output = [];
    let i = 0;
    let j = 0;
    
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            output.push(left[i]);
            i++;
        } else {
            output.push(right[j]);
            j++;
        }
    }
    while (i < left.length) {
        output.push(left[i]);
        i++;
    }
    while (j < right.length) {
        output.push(right[j]);
        j++;
    }
    return output;
}
