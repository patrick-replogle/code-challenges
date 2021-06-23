/*
Initially on a notepad only one character 'A' is present. You can perform two operations on this notepad for each step:

Copy All: You can copy all the characters present on the notepad (partial copy is not allowed).
Paste: You can paste the characters which are copied last time.
 
Given a number n. You have to get exactly n 'A' on the notepad by performing the minimum number of steps permitted. Output the minimum 
number of steps to get n 'A'.

Example 1:
Input: 3
Output: 3
Explanation:
Intitally, we have one character 'A'.
In step 1, we use Copy All operation.
In step 2, we use Paste operation to get 'AA'.
In step 3, we use Paste operation to get 'AAA'.
*/

// first pass solution
var minSteps = function(n) {
    if (n === 1) return 0;
    
    let output = Infinity;
    
    function recurse(path, copy, count) {
        if (path.length > n) return;
        if (path.length === n) return output = Math.min(output, count);
        
        recurse(path + copy, copy, count + 1);
        recurse(path + path, path, count + 2);
    }
    recurse('A', 'A', 1);
    
    return output;
};

// second pass solution using far less memory
var minSteps = function(n) {
    if (n === 1) return 0;
    
    let output = Infinity;
    
    function recurse(pathSize, copySize, steps) {
        if (pathSize > n) return;
        if (pathSize === n) return output = Math.min(output, steps);
        
        recurse(pathSize + copySize, copySize, steps + 1);
        recurse(pathSize + pathSize, pathSize, steps + 2);
    }
    recurse(1, 1, 1);
    
    return output;
};
