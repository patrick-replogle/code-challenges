/*
Given a binary tree, determine if it is height-balanced.

For this problem, a height-balanced binary tree is defined as:

a binary tree in which the left and right subtrees of every node differ in height by no more than 1.

Example 1:
Input: root = [3,9,20,null,null,15,7]
Output: true

Example 2:
Input: root = [1,2,2,3,3,null,null,4,4]
Output: false
*/

// first pass solution using recursive DFS
var isBalanced = function(root) {
    if (!root || !root.left && !root.right) return true;
    
    let left = findHeight(root.left);
    let right = findHeight(root.right);
    if (Math.abs(left - right) > 1) return false;
    
    return isBalanced(root.left) && isBalanced(root.right);
};

var findHeight = function(root) {
    if (!root) return 0;
    return Math.max(findHeight(root.left), findHeight(root.right)) + 1;
}

// second pass solution using iterative DFS
var isBalanced = function(root) {
    if (!root || !root.left && !root.right) return true;
    
    let stack = [root];
    
    while(stack.length) {
        let curr = stack.pop();
        let left = findHeight(curr.left);
        let right = findHeight(curr.right);
        
        if (Math.abs(left - right) > 1) return false;
        
        if (curr.left) stack.push(curr.left);
        if (curr.right)stack.push(curr.right);
    }
    return true;
};

var findHeight = function(root) {
    if (!root) return 0;
    
    let max = 0;
    let stack = [[root, 1]];
    
    while (stack.length) {
        let [node, depth] = stack.pop();
        
        max = Math.max(max, depth);
        if (node.left) stack.push([node.left, depth + 1]);
        if (node.right) stack.push([node.right, depth + 1]);
    }
    return max;
}
