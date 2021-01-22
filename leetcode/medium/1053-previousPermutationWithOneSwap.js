// Given an array of positive integers arr (not necessarily distinct), return the lexicographically largest permutation that is smaller than 
// arr, that can be made with exactly one swap (A swap exchanges the positions of two numbers arr[i] and arr[j]). If it cannot be done, then 
// return the same array.

// Example 1:
// Input: arr = [3,2,1]
// Output: [3,1,2]
// Explanation: Swapping 2 and 1.

// Example 2:
// Input: arr = [1,1,5]
// Output: [1,1,5]
// Explanation: This is already the smallest permutation.

// Example 3:
// Input: arr = [1,9,4,6,7]
// Output: [1,7,4,6,9]
// Explanation: Swapping 9 and 7.

var prevPermOpt1 = function(arr) {
    let i = arr.length - 2;
    
    while (i >= 0) {
        if (arr[i] > arr[i + 1]) break;
        i--;
    }
    
    let j = arr.length - 1;
    
    while (j >= i) {
        if (arr[j] < arr[i]) {
            while (arr[j] === arr[j - 1]) {
                j--;
            }
            break;
        }
        j--;
    }
    [arr[i], arr[j]] = [arr[j], arr[i]];
    
    return arr;
};
