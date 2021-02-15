/*
Given a list of 24-hour clock time points in "HH:MM" format, return the minimum minutes difference between any two time-points in the list.
 
Example 1:
Input: timePoints = ["23:59","00:00"]
Output: 1

Example 2:
Input: timePoints = ["00:00","23:59","00:00"]
Output: 0
*/

// first pass solution
var findMinDifference = function(timePoints) {
    let minDifference = Infinity;
    let arr = timePoints
                    .map(el => (Number(el.slice(0, 2)) * 60) + Number(el.slice(3, 5)))
                    .sort((a, b) => a - b);

    for (let i = 1; i < arr.length; i++) {
        minDifference = Math.min(minDifference, Math.abs(arr[i] - arr[i-1]));
    }
    return Math.min(minDifference, 1440 + arr[0] - arr[arr.length - 1]);
};
