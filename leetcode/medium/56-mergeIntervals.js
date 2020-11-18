// Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an 
// array of the non-overlapping intervals that cover all the intervals in the input.

// Example 1:

// Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
// Output: [[1,6],[8,10],[15,18]]
// Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].

// Example 2:
// Input: intervals = [[1,4],[4,5]]
// Output: [[1,5]]
// Explanation: Intervals [1,4] and [4,5] are considered overlapping.

var merge = function(intervals) {
    intervals.sort((a, b) => a[0] !== b[0] ? a[0] - b[0] : a[1] - b[1]);
    
    let result = [intervals[0]];
    
    for (let i = 1; i < intervals.length; i++) {
        let len = result.length - 1;
        let lastMerged = result[len];
        let currInterval = intervals[i];
        
        if (lastMerged[1] >= currInterval[0]) {
            result[len][1] = Math.max(lastMerged[1], currInterval[1]);
        } else {
            result.push(currInterval);
        }
    }
    return result;
}
