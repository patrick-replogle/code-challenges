Given an integer rowIndex, return the rowIndexth row of the Pascal's triangle.

Notice that the row index starts from 0.

In Pascal's triangle, each number is the sum of the two numbers directly above it.

Follow up:

Could you optimize your algorithm to use only O(k) extra space?

Example 1:
Input: rowIndex = 3
Output: [1,3,3,1]

Example 2:
Input: rowIndex = 0
Output: [1]

Example 3:
Input: rowIndex = 1
Output: [1,1]

// first pass solution
var getRow = function(rowIndex) {
    if (rowIndex === 0) return [1];
    else if (rowIndex === 1) return [1, 1];
    
    let triangle = [[1], [1, 1]];
    
    for (let i = 2; i <= rowIndex; i++) {
        let curr = [];  
        for (let j = 0; j <= i; j++) {
            if (j === 0) {
                curr.push(1);
            } else if (j === i) {
                curr.push(1);
            } else {
                curr.push(triangle[i-1][j-1] + triangle[i-1][j])
            }
        }
        triangle.push(curr);
    }
    return triangle[rowIndex];
};
