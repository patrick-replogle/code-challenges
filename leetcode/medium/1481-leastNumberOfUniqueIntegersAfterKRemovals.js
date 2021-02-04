/*
Given an array of integers arr and an integer k. Find the least number of unique integers after removing exactly k elements.

Example 1:
Input: arr = [5,5,4], k = 1
Output: 1
Explanation: Remove the single 4, only 5 is left.
Example 2:
Input: arr = [4,3,1,1,3,3,2], k = 3
Output: 2
Explanation: Remove 4, 2 and either one of the two 1s or three 3s. 1 and 3 will be left.
*/

// first pass solution
var findLeastNumOfUniqueInts = function(arr, k) {
    let dict = {};
    
    for (let num of arr) {
        dict[num] ? dict[num] += 1 : dict[num] = 1;
    }
    
    let count = Object.values(dict).sort((a, b) => b - a)
    
    while (k > 0) {
        let len = count.length - 1;
        if (count[len] > 0) count[len]--;
        if (count[len] === 0) count.pop();
        k--;
    }
    return count.length;
};
