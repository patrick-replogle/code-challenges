/*
Given a non-negative integer numRows, generate the first numRows of Pascal's triangle.

In Pascal's triangle, each number is the sum of the two numbers directly above it.

Example:
Input: 5
Output:
[
     [1],
    [1,1],
   [1,2,1],
  [1,3,3,1],
 [1,4,6,4,1]
 */
 
 // first pass solution
 var generate = function(numRows) {
    if (numRows === 0) return [];
    
    let triangle = [];
    
    for (let i = 0; i < numRows; i++) {
        if (i === 0) {
            triangle.push([1]);
        } else if (i === 1) {
            triangle.push([1, 1]);
        } else {
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
    }
    return triangle;
};
