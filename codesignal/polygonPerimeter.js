// You have a rectangular white board with some black cells. The black cells create a connected black figure, i.e. it is possible to 
// get from any black cell to any other one through connected adjacent (sharing a common side) black cells.

// Find the perimeter of the black figure assuming that a single cell has unit length.

// It's guaranteed that there is at least one black cell on the table.

// Example

// For

// matrix = [[false, true,  true ],
//           [true,  true,  false],
//           [true,  false, false]]
// the output should be
// polygonPerimeter(matrix) = 12.

function polygonPerimeter(matrix) {
    let totalPerimeter = 0;
    
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (matrix[i][j]) {
                totalPerimeter += calculateCellPerimeter(matrix, i , j);
            }
        }
    } 
    return totalPerimeter;
}

function calculateCellPerimeter(matrix, i, j) {
    let perimeter = 0;
    
    if (i === 0 || !matrix[i-1][j]) perimeter++; // north
    if (i === matrix.length - 1 || !matrix[i+1][j]) perimeter++; // south
    if (j === matrix[0].length - 1 || !matrix[i][j+1]) perimeter++; // east 
    if (j === 0 || !matrix[i][j-1]) perimeter++; // west
    
    return perimeter;
}
