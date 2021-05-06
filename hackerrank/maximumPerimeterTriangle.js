/*
Given an array of stick lengths, use  of them to construct a non-degenerate triangle with the maximum possible perimeter. Return an array of the 
lengths of its sides as  integers in non-decreasing order.

If there are several valid triangles having the maximum perimeter:

Choose the one with the longest maximum side.
If more than one has that maximum, choose from them the one with the longest minimum side.
If more than one has that maximum as well, print any one them.
If no non-degenerate triangle exists, return .

Example

The triplet  will not form a triangle. Neither will  or , so the problem is reduced to  and . The longer perimeter is .

Function Description

Complete the maximumPerimeterTriangle function in the editor below.

maximumPerimeterTriangle has the following parameter(s):

int sticks[n]: the lengths of sticks available
Returns

int[3] or int[1]: the side lengths of the chosen triangle in non-decreasing order or -1
*/

// first pass solution
function isValid(a, b, c) {
    return a + b > c && a + c > b && b + c > a;
}

function maximumPerimeterTriangle(sticks) {
    sticks.sort((a, b) => a - b);
    
    for (let i = sticks.length - 1; i >= 2; i--) {
        for (let j = i - 1; j >= 1; j--) {
            for (let k = j - 1; k >= 0; k--) {
                if (isValid(sticks[i], sticks[j], sticks[k])) {
                    return [sticks[i], sticks[j], sticks[k]].sort((a, b) => a - b)
                }
            }
        }
    }
    return [-1]
}
