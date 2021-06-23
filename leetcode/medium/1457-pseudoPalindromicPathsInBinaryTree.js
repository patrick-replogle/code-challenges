/*
Given a binary tree where node values are digits from 1 to 9. A path in the binary tree is said to be pseudo-palindromic if at 
least one permutation of the node values in the path is a palindrome.

Return the number of pseudo-palindromic paths going from the root node to leaf nodes.

Example 1:
Input: root = [2,3,1,3,1,null,1]
Output: 2 
Explanation: The figure above represents the given binary tree. There are three paths going from the root node to leaf nodes: the 
red path [2,3,3], the green path [2,1,1], and the path [2,3,1]. Among these paths only red path and green path are pseudo-palindromic 
paths since the red path [2,3,3] can be rearranged in [3,2,3] (palindrome) and the green path [2,1,1] can be rearranged in [1,2,1] (palindrome).
*/

// first pass solution (brute force)
var pseudoPalindromicPaths  = function(root) {
    let paths = [];
    let output = 0;
    DFT(paths, new Array(9).fill(0), root);
    return countPalindromes(paths);
};

var DFT = function(result, path, root) {
    path[root.val - 1]++;
    if (!root.left && !root.right) result.push(path);
    if (root.left) DFT(result, [...path], root.left);
    if (root.right) DFT(result, [...path], root.right);
}

var countPalindromes = function(paths) {
    let output = 0;
    
    for (let path of paths) {
        let oddCount = 0;
        let flag = true;
        for (let num of path) {
            if (num % 2 !== 0) {
                oddCount++;
                if (oddCount > 1) {
                    flag = false;
                    break;
                }
            }
        }
        if (flag) output++;
    }
    return output;
}

// optimized solution
var pseudoPalindromicPaths  = function(root) {
    if (!root) return 0;
    
    let output = 0;
    let stack = [[0, root]];
    
    while (stack.length) {
        let [path, node] = stack.pop();
        
        path = path ^ (1 << node.val);
        
        if (!node.left & !node.right) {
            if ((path & (path - 1)) === 0) {
                output += 1;
            }
        }
        if (node.left) stack.push([path, node.left]);
        if (node.right) stack.push([path, node.right]);
    }
    return output;
};
