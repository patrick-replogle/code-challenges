/*
You are given a number of sticks of varying lengths. You will iteratively cut the sticks into smaller sticks, discarding the shortest pieces until 
there are none left. At each iteration you will determine the length of the shortest stick remaining, cut that length from each of the longer sticks 
and then discard all the pieces of that shortest length. When all the remaining sticks are the same length, they cannot be shortened so discard them.

Given the lengths of n sticks, print the number of sticks that are left before each iteration until there are none left.
*/

// first pass solution
function cutTheSticks(arr) {
    let output = [];
    arr.sort((a, b) => b - a)
    
    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] === 0) continue;

        let validNums = 0;
        let min = arr[i];
        
        arr.forEach((num, i) => {
            if (arr[i] > 0) validNums++;
            arr[i] -= min;
        })
        if (validNums === 0) break;
        output.push(validNums);
        arr.pop()
    }
    return output;
}
