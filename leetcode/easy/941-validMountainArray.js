// Given an array of integers arr, return true if and only if it is a valid mountain array.

// Recall that arr is a mountain array if and only if:

// arr.length >= 3
// There exists some i with 0 < i < arr.length - 1 such that:
// arr[0] < arr[1] < ... < arr[i - 1] < arr[i]
// arr[i] > arr[i + 1] > ... > arr[arr.length - 1]

// Example 1:
// Input: arr = [2,1]
// Output: false

// Example 2:
// Input: arr = [3,5,5]
// Output: false

// Example 3:
// Input: arr = [0,3,2,1]
// Output: true

// first pass solution
var validMountainArray = function(arr) {
    if (arr.length < 3 || arr[0] > arr[1]) return false;
    
    let i = 0;
    
    while (arr[i] < arr[i+1]) {
        i++; // ascending to the peak
    }
    
    while (arr[i] > arr[i+1]) {
        i++; // descending from the peak
        if (i === arr.length - 1) {
            return true; // we've arrived at the end of the array
        }
    }
    return false; 
};
