/*
Given the root of a binary tree, return the sum of every tree node's tilt.

The tilt of a tree node is the absolute difference between the sum of all left subtree node values and all right subtree node values. 
If a node does not have a left child, then the sum of the left subtree node values is treated as 0. The rule is similar if there the 
node does not have a right child.

Example 1:
Input: root = [1,2,3]
Output: 1
Explanation: 
Tilt of node 2 : |0-0| = 0 (no children)
Tilt of node 3 : |0-0| = 0 (no children)
Tile of node 1 : |2-3| = 1 (left subtree is just left child, so sum is 2; right subtree is just right child, so sum is 3)
Sum of every tilt : 0 + 0 + 1 = 1
*/

// first pass solution
var findTilt = function(root) {
    if (!root) return 0;
    
    let sum = 0;
    let stack = [root];
    
    while (stack.length) {
        let curr = stack.pop();
        
        let left = dfs(curr.left)
        let right = dfs(curr.right);
        
        sum += Math.abs(left - right);
        
        if (curr.left) stack.push(curr.left);
        if (curr.right) stack.push(curr.right);
    }
    return sum;
};

var dfs = function(root) {
    if (!root) return 0;
    let left = dfs(root.left);
    let right = dfs(root.right);
    return left + right + root.val
}

// second pass solution
var findTilt = function(root) {
    let sum = 0;
    
    function traverse(root) {
        if (!root) return 0;
        
        let left = traverse(root.left);
        let right = traverse(root.right);
        let diff = Math.abs(left - right);
        sum += diff;
        
        return root.val + left + right;
    }
    traverse(root);
    return sum;
};
