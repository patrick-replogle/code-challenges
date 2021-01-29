/*
Given a m x n matrix grid which is sorted in non-increasing order both row-wise and column-wise, return the number of negative numbers in grid.

Example 1:
Input: grid = [[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]
Output: 8
Explanation: There are 8 negatives number in the matrix.

Example 2:
Input: grid = [[3,2],[1,0]]
Output: 0

Example 3:
Input: grid = [[1,-1],[-1,-1]]
Output: 3
*/

// first pass solution
var countNegatives = function(grid) {
    let count = 0;
    
    for (let row = 0; row < grid.length; row++) {
        for (let col = grid[row].length - 1; col >= 0; col--) {
            if (grid[row][col] < 0) count++;
            else break;
        }
    }
    return count;
};
