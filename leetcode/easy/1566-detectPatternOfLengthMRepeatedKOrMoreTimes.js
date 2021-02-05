/*
Given an array of positive integers arr,  find a pattern of length m that is repeated k or more times.

A pattern is a subarray (consecutive sub-sequence) that consists of one or more values, repeated multiple times consecutively 
without overlapping. A pattern is defined by its length and the number of repetitions.

Return true if there exists a pattern of length m that is repeated k or more times, otherwise return false.

Example 1:
Input: arr = [1,2,4,4,4,4], m = 1, k = 3
Output: true
Explanation: The pattern (4) of length 1 is repeated 4 consecutive times. Notice that pattern can be repeated k or more times but not less.
*/

// first pass solution
var containsPattern = function(arr, m, k) {
    for (let i = 0; i <= arr.length - m; i++) {
        let pattern = arr.slice(i, i + m).join('');
        let count = 1;
        let j = i + m;
        
        while (arr.slice(j, j + m).join('') === pattern) {
            j += m;
            count++;
            if (count >= k) return true;
        }
    }
    return false;
};
