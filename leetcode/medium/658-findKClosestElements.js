/*
Given a sorted integer array arr, two integers k and x, return the k closest integers to x in the array. The result should also 
be sorted in ascending order.

An integer a is closer to x than an integer b if:

|a - x| < |b - x|, or
|a - x| == |b - x| and a < b
 
Example 1:
Input: arr = [1,2,3,4,5], k = 4, x = 3
Output: [1,2,3,4]

Example 2:
Input: arr = [1,2,3,4,5], k = 4, x = -1
Output: [1,2,3,4]
*/

// first pass solution
var findClosestElements = function(arr, k, target) {
    let output = [];
    let dict = {};
    
    for (let i = 0; i < arr.length; i++) {
        dict[i] = Math.abs(arr[i] - target);
    }
    
    for (let a of Object.entries(dict).sort((a, b) => a[1] - b[1])) {
        if (output.length < k) {
            output.push(arr[a[0]]);
        } else {
            break;
        }
    }
    return output.sort((a, b) => a - b);
}

// second pass solution
var findClosestElements = function(arr, k, target) {
    arr.sort((a, b) => Math.abs(a - target) - Math.abs(b - target));
    
    return arr.slice(0, k).sort((a, b) => a - b);
}
