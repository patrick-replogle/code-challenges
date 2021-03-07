/*
In a array A of size 2N, there are N+1 unique elements, and exactly one of these elements is repeated N times.

Return the element repeated N times.

Example 1:
Input: [1,2,3,3]
Output: 3

Example 2:
Input: [2,1,2,5,3,2]
Output: 2

Example 3:
Input: [5,1,5,2,5,3,5,4]
Output: 5
*/

// first pass solution
var repeatedNTimes = function(A) {
    let count = {};
    
    for (let num of A) {
        count[num] ? count[num] += 1 : count[num] = 1;
    }

    for (let key in count) {
        if (count[key] === A.length / 2) {
            return Number(key);
        }
    }
    return -1;
};
