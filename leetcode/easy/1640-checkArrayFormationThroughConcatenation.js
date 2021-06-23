// You are given an array of distinct integers arr and an array of integer arrays pieces, where the integers in pieces are distinct. Your goal is to form 
// arr by concatenating the arrays in pieces in any order. However, you are not allowed to reorder the integers in each array pieces[i].

// Return true if it is possible to form the array arr from pieces. Otherwise, return false.

// Example 1:
// Input: arr = [85], pieces = [[85]]
// Output: true

// Example 2:
// Input: arr = [15,88], pieces = [[88],[15]]
// Output: true
// Explanation: Concatenate [15] then [88]

// Example 3:
// Input: arr = [49,18,16], pieces = [[16,18,49]]
// Output: false
// Explanation: Even though the numbers match, we cannot reorder pieces[0].

// first pass solution
var canFormArray = function(arr, pieces) {
    let set = new Set(arr);
    let str = arr.join(' ');
    
    for (let piece of pieces) {
        if (!str.includes(piece.join(' '))) {
            return false;
        } else {
            for (let num of piece) {
                if (!set.has(num)) return false;
            } 
        }
    }
   return true;
};

// second pass solution using much less memory
var canFormArray = function(arr, pieces) {   
    for (let a of pieces) {
        let index = arr.indexOf(a[0]);
        if (index === -1) return false;
        let j = 0;
        while (j < a.length && arr[index] === a[j]) {
            j++;
            index++;
        }
        if (j < a.length) return false;
    }
    return true;
};
