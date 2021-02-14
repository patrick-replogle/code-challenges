/*
Suppose you have n integers labeled 1 through n. A permutation of those n integers perm (1-indexed) is considered a beautiful 
arrangement if for every i (1 <= i <= n), either of the following is true:

perm[i] is divisible by i.
i is divisible by perm[i].
Given an integer n, return the number of the beautiful arrangements that you can construct.

Example 1:
Input: n = 2
Output: 2
Explanation: 
The first beautiful arrangement is [1,2]:
    - perm[1] = 1 is divisible by i = 1
    - perm[2] = 2 is divisible by i = 2
The second beautiful arrangement is [2,1]:
    - perm[1] = 2 is divisible by i = 1
    - i = 2 is divisible by perm[2] = 1
*/

// first pass solution
var countArrangement = function(N) {
    let results = [];
    let arr = [];var countArrangement = function(N) {
    let count = 0;
    let arr = [];
    
    for (let i = 1; i <= N; i++) {
        arr.push(i);
    }
    
    function permute(options, path) {
        if (path.length === N) return count++;
        if (!options.length) return;
        
        for (let i = 0; i < options.length; i++) {
            if (options[i] % (path.length + 1) === 0 || (path.length + 1) % options[i] === 0) {
                path.push(options[i]);
                permute([...options.slice(0, i), ...options.slice(i + 1)], path);
                path.pop();
            }
        }
    }
    permute(arr, []);
    
    return count;
};
    
    for (let i = 1; i <= N; i++) {
        arr.push(i);
    }
    
    function permute(options, path, size) {
        if (path.length === N) return results.push(path);
        if (!options.length) return;
        
        for (let i = 0; i < options.length; i++) {
            if (options[i] % size === 0 || size % options[i] === 0) {
                permute([...options.slice(0, i), ...options.slice(i + 1)], 
                        [...path, options[i]], size + 1);
            }
        }
    }
    permute(arr, [], 1);
    return results.length;
};

// second pass solution
var countArrangement = function(N) {
    let count = 0;
    let arr = [];
    
    for (let i = 1; i <= N; i++) {
        arr.push(i);
    }
    
    function permute(options, path) {
        if (path.length === N) return count++;
        if (!options.length) return;
        
        for (let i = 0; i < options.length; i++) {
            if (options[i] % (path.length + 1) === 0 || (path.length + 1) % options[i] === 0) {
                path.push(options[i]);
                permute([...options.slice(0, i), ...options.slice(i + 1)], path);
                path.pop();
            }
        }
    }
    permute(arr, []);
    return count;
};
    
    
