/*
Given a matrix of M x N elements (M rows, N columns), return all elements of the matrix in diagonal order as shown in the below image.

Example:
Input:
[
 [ 1, 2, 3 ],
 [ 4, 5, 6 ],
 [ 7, 8, 9 ]
]

Output:  [1,2,4,7,5,3,6,8,9]
*/

// first pass solution => 96% faster & 96% less memory than other JS solutions, but very ugly looking
var findDiagonalOrder = function(matrix) {
    if (!matrix.length) return [];
    if (matrix.length === 1) return matrix.pop();
       
    let output = [];
    let up = true;
    let len = matrix.length * matrix[0].length;
    let [x, y] = [0, 0];
    
    while (output.length < len) {
        if(up) {
            while (x >= 0 && y <= matrix[0].length - 1) {
                output.push(matrix[x][y]); 
                if (x === 0) {
                    if (y === matrix[0].length - 1) x++;
                    else y++;
                    break
                }
                else if (y === matrix[0].length - 1) {
                    x++;
                    break;
                }
                x--;
                y++;
            }
        } else {
            while (x <= matrix.length - 1 && y >= 0) {
                output.push(matrix[x][y]);
                if (y === 0) {
                    if (x < matrix.length - 1) x++;
                    else y++;
                    break;
                } 
                else if (x === matrix.length - 1) {
                    y++;
                    break;
                } 
                x++;
                y--;
            }
        }
        up = !up;
    }
    return output;
};



