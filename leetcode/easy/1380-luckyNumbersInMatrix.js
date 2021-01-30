/*
Given a m * n matrix of distinct numbers, return all lucky numbers in the matrix in any order.

A lucky number is an element of the matrix such that it is the minimum element in its row and maximum in its column.

Example 1:
Input: matrix = [[3,7,8],[9,11,13],[15,16,17]]
Output: [15]
Explanation: 15 is the only lucky number since it is the minimum in its row and the maximum in its column

Example 2:
Input: matrix = [[1,10,4,2],[9,3,8,7],[15,16,17,12]]
Output: [12]
Explanation: 12 is the only lucky number since it is the minimum in its row and the maximum in its column.

Example 3:
Input: matrix = [[7,8],[1,2]]
Output: [7]
*/

// first pass solution
var luckyNumbers  = function(matrix) {
    let minRows = new Set();
    let maxCols = new Set();
    let output = [];
    
    for (let i = 0; i < matrix.length; i++) {
        minRows.add(Math.min(...matrix[i]))
    }
    
    for (let i = 0; i < matrix[0].length; i++) {
        let max = -Infinity;
        for (let j = 0; j < matrix.length; j++) {
            max = Math.max(max, matrix[j][i]);
        }
        maxCols.add(max);
    }
    
    for (let num of minRows) {
        if (maxCols.has(num)) {
            output.push(num);
        }
    }
    return output;
};

