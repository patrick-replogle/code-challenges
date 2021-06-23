/*
Consider a matrix where each cell contains either a  or a . Any cell containing a  is called a filled cell. Two cells are said to be connected 
if they are adjacent to each other horizontally, vertically, or diagonally. In the following grid, all cells marked X are connected to the cell marked Y.

XXX
XYX  
XXX    
If one or more filled cells are also connected, they form a region. Note that each cell in a region is connected to zero or more cells in the region 
but is not necessarily directly connected to all the other cells in the region.

Given an  matrix, find and print the number of cells in the largest region in the matrix. Note that there may be more than one region in the matrix.

Function Description

Complete the connectedCell function in the editor below.

connectedCell has the following parameter(s):
- int matrix[n][m]:  represents the  row of the matrix

Returns
- int: the area of the largest region

Input Format

The first line contains an integer , the number of rows in the matrix.
The second line contains an integer , the number of columns in the matrix.
Each of the next  lines contains  space-separated integers .
*/

// first pass solution
function DFS(matrix, i, j, path) {
    if (i < 0 || i > matrix.length - 1 || j < 0 || j > matrix[0].length - 1) return;
    if (matrix[i][j] !== 1) return;

    matrix[i][j] = '#';
    path.push(path.pop() + 1);
    
    DFS(matrix, i - 1, j, path);
    DFS(matrix, i + 1, j, path);
    DFS(matrix, i, j - 1, path);
    DFS(matrix, i, j + 1, path);
    DFS(matrix, i - 1, j + 1, path);
    DFS(matrix, i - 1, j - 1, path);
    DFS(matrix, i + 1, j - 1, path);
    DFS(matrix, i + 1, j + 1, path);
}

function connectedCell(matrix) {
    let largest = -1;
    
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (matrix[i][j] === 1) {
                let count = [0]
                DFS(matrix, i, j, count)
                largest = Math.max(largest, count.pop());
            }
        }
    }
    return largest;
}
