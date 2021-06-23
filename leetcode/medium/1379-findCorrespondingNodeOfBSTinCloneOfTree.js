/*
Given two binary trees original and cloned and given a reference to a node target in the original tree.

The cloned tree is a copy of the original tree.

Return a reference to the same node in the cloned tree.

Note that you are not allowed to change any of the two trees or the target node and the answer must be a reference to a node 
in the cloned tree.

Follow up: Solve the problem if repeated values on the tree are allowed.

Example 1:
Input: tree = [7,4,3,null,null,6,19], target = 3
Output: 3
Explanation: In all examples the original and cloned trees are shown. The target node is a green node from the original tree. The answer 
is the yellow node from the cloned tree.
*/

// first pass solution using recursive DFT
var getTargetCopy = function(original, cloned, target) {
    let reference = null;
    
    function traverse(root) {
        if (root.val === target.val) {
            reference = root;
            return;
        }
        if (root.left) traverse(root.left);
        if (root.right) traverse(root.right);
    }
    traverse(cloned);
    
    return reference;
};

// slight refactor
var getTargetCopy = function(original, cloned, target) {
    function traverse(root) {
        if (root) {
            if (root.val === target.val) {
                return root;
            }
            
            return traverse(root.left) || traverse(root.right)
        }
        return null;
    }
    return traverse(cloned);
};

// iterative solution
var getTargetCopy = function(original, cloned, target) {
    let stack = [cloned];
    
    while (stack.length) {
        let curr = stack.pop();
        
        if (curr.val === target.val) {
            return curr;
        }
        if (curr.left) stack.push(curr.left);
        if (curr.right) stack.push(curr.right);
    }
    return null;
};
