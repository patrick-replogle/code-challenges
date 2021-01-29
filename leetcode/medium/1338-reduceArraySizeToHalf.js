/*
Given an array arr.  You can choose a set of integers and remove all the occurrences of these integers in the array.

Return the minimum size of the set so that at least half of the integers of the array are removed.

Example 1:
Input: arr = [3,3,3,3,5,5,5,2,2,7]
Output: 2
Explanation: Choosing {3,7} will make the new array [5,5,5,2,2] which has size 5 (i.e equal to half of the size of the old array).
Possible sets of size 2 are {3,5},{3,2},{5,2}.
Choosing set {2,7} is not possible as it will make the new array [3,3,3,3,5,5,5] which has size greater than half of the size of the old array.
*/

// first pass solution
var minSetSize = function(arr) {
    let dict = {};
    let target = arr.length / 2;
    let setSize = 0;
    let removed = 0;
    
    arr.forEach(num => dict[num] ? dict[num] += 1 : dict[num] = 1);
    
    for (let count of Object.values(dict).sort((a, b) => b - a)) {
        removed += count
        setSize++;
        if (removed >= target) break;
    }
    return setSize;
};
