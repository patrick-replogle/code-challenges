// Construct a square matrix with a size N × N containing integers from 1 to N * N in a spiral order, starting from top-left and in clockwise direction.

// Example

// For n = 3, the output should be

// spiralNumbers(n) = [[1, 2, 3],
//                     [8, 9, 4],
//                     [7, 6, 5]]


function spiralNumbers(n) {
    let matrix = buildMatrix(n);
    let curr = 1;
    let rowMin = 0;
    let rowMax = matrix.length - 1;
    let colMin = 0;
    let colMax = matrix[0].length - 1;
    
    while (curr <=(n * n)) {
        for (let i = colMin; i <= colMax; i++) {
            matrix[rowMin][i] = curr;
            curr++
        }
        rowMin++;
        
        for (let i = rowMin; i <= rowMax; i++) {
            matrix[i][colMax] = curr;
            curr++;
        }
        colMax--;
        
        for (let i = colMax; i >= colMin; i--) {
            matrix[rowMax][i] = curr;
            curr++;
        }
        rowMax--;
            
        for (let i = rowMax; i >= rowMin; i--) {
            matrix[i][colMin] = curr;
            curr++;
        }  
        colMin++;     
    }
    
    return matrix;
}

function buildMatrix(n) {
    let matrix = [];
    
    for (let i = 0; i < n; i++) {
        let temp = [];
        for (let j = 0; j < n; j++) {
            temp.push(0);
        }
        matrix.push(temp);
    }
    return matrix;
}
