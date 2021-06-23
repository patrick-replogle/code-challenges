/*
Given the root of a binary tree, return all duplicate subtrees.

For each kind of duplicate subtrees, you only need to return the root node of any one of them.

Two trees are duplicate if they have the same structure with the same node values.

Example 1:
Input: root = [1,2,3,4,null,2,4,null,null,4]
Output: [[2,4],[4]]

Example 2:
Input: root = [2,1,1]
Output: [[1]]
*/

// first pass solution using recursive DFS
var findDuplicateSubtrees = function(root) {
    let output = [];
    let count = {};
    
    function dfs(root) {
        if (!root) return;
        let curr = JSON.stringify(root);
        count[curr] ? count[curr] += 1 : count[curr] = 1;
        if (count[curr] === 2) output.push(root);
        dfs(root.left);
        dfs(root.right);
    }
    dfs(root);
    
    return output;
};

// second pass solution using iterative DFS
var findDuplicateSubtrees = function(root) {
    let output = [];
    let count = {};
    let stack = [root];
    
    while (stack.length) {
        let curr = stack.pop();
        let key = JSON.stringify(curr);
        count[key] ? count[key] += 1 : count[key] = 1;
        
        if (count[key] === 2) output.push(curr);
        if (curr.left) stack.push(curr.left);
        if (curr.right) stack.push(curr.right);
    }
    return output;
};
