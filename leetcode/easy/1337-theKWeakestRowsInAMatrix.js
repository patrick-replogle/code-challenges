/*
Given a m * n matrix mat of ones (representing soldiers) and zeros (representing civilians), return the indexes of the k weakest rows 
in the matrix ordered from the weakest to the strongest.

A row i is weaker than row j, if the number of soldiers in row i is less than the number of soldiers in row j, or they have the same 
number of soldiers but i is less than j. Soldiers are always stand in the frontier of a row, that is, always ones may appear first and then zeros.

Example 1:
Input: mat = 
[[1,1,0,0,0],
 [1,1,1,1,0],
 [1,0,0,0,0],
 [1,1,0,0,0],
 [1,1,1,1,1]], 
k = 3
Output: [2,0,3]
Explanation: 
The number of soldiers for each row is: 
row 0 -> 2 
row 1 -> 4 
row 2 -> 1 
row 3 -> 2 
row 4 -> 5 
Rows ordered from the weakest to the strongest are [2,0,3,1,4]
*/

// first pass solution
var kWeakestRows = function(mat, k) {
    let dict = {};
    
    for (let row = 0; row < mat.length; row++) {
        for (let col = 0; col < mat[row].length; col++) {
            if (!dict.hasOwnProperty(row)) dict[row] = 0;
            if (mat[row][col] === 1) dict[row] += 1;
        }
    }
    
    return Object.entries(dict)
            .sort((a, b) => a[1] - b[1])
            .map(arr => Number(arr[0]))
            .slice(0, k);
};

// second pass solution that is slightly faster
var kWeakestRows = function(mat, k) {
    let output = [];
    let dict = {};
    
    for (let row = 0; row < mat.length; row++) {
        for (let col = 0; col < mat[row].length; col++) {
            if (!dict.hasOwnProperty(row)) dict[row] = 0;
            if (mat[row][col] === 1) dict[row] += 1;
        }
    }
    
    let entries = Object.entries(dict).sort((a, b) => a[1] - b[1]);
    
    for (let arr of entries) {
        if (output.length < k) {
            output.push(Number(arr[0]));
        } else {
            break;
        }
    }

    return output;
};

// third pass solution 
var kWeakestRows = function(mat, k) {
    return mat.map((arr, i) => arr.reduce((acc, el) => acc + el)) // count soldiers in each row
                    .map((num, i) => [i, num]) // create an entries array [index, soldier count]
                    .sort((a, b) => a[1] - b[1]) // sort entries array by soldier count
                    .map((arr) => arr[0]) // remove soldier count since we only need the index
                    .slice(0, k) // return the k weakest rows
};

