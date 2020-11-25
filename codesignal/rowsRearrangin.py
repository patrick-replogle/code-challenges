// Given a rectangular matrix of integers, check if it is possible to rearrange its rows in such a way that all its columns 
// become strictly increasing sequences (read from top to bottom).

// Example

// For

// matrix = [[2, 7, 1], 
//           [0, 2, 0], 
//           [1, 3, 1]]
// the output should be
// rowsRearranging(matrix) = false;

// For

// matrix = [[6, 4], 
//           [2, 2], 
//           [4, 3]]

// sort rows asc by first value in each row, then iteratite thru each column and return false if numbers aren't 
// ascending from top row to bottom row
def rowsRearranging(matrix):
    matrix.sort(key=lambda x: x[0])
    
    for i in range(len(matrix[0])):
        prev = matrix[0][i]
        
        for j in range(1, len(matrix)):
            if prev >= matrix[j][i]:
                return False
                
            prev = matrix[j][i]

    
    return True
