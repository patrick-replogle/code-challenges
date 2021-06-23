/*
Given n points on a 2D plane where points[i] = [xi, yi], Return the widest vertical area between two points such that no points 
are inside the area.

A vertical area is an area of fixed-width extending infinitely along the y-axis (i.e., infinite height). The widest vertical 
area is the one with the maximum width.

Note that points on the edge of a vertical area are not considered included in the area.

Example 1:
Input: points = [[8,7],[9,9],[7,4],[9,7]]
Output: 1
Explanation: Both the red and the blue area are optimal.
*/

// first pass solution
var maxWidthOfVerticalArea = function(points) {
    let widest = -Infinity;
    
    points.sort((a, b) => a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]);

    for (let i = 1; i < points.length; i++) {
        widest = Math.max(widest, points[i][0] - points[i-1][0])
    }
    return widest;
};
