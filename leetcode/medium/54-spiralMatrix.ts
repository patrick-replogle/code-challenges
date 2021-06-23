// Given an m x n matrix, return all elements of the matrix in spiral order.

// Example 1:
// Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
// Output: [1,2,3,6,9,8,7,4,5]

// first pass solution
function spiralOrder(matrix: number[][]): number[] {
    let result: number[] = [];
    let minRow: number = 0;
    let maxRow: number = matrix.length - 1;
    let minCol: number = 0;
    let maxCol: number = matrix[0].length - 1;
    let length: number = matrix.length * matrix[0].length; 
    
    while(result.length < length) {
        for (let i = minCol; i <= maxCol && result.length < length; i++) {
            result.push(matrix[minRow][i]);
        }
        minRow++;
        
        for (let i = minRow; i <= maxRow && result.length < length; i++) {
            result.push(matrix[i][maxCol]);
        }
        maxCol--;
        
        for (let i = maxCol; i >= minCol && result.length < length; i--) {
            result.push(matrix[maxRow][i]);
        }
        maxRow--;
        
        for (let i = maxRow; i >= minRow && result.length < length; i--) {
            result.push(matrix[i][minCol]);
        }
        minCol++;
    }
    return result;
};
