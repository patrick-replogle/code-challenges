/*
Find the sum of all left leaves in a given binary tree.

Example:

    3
   / \
  9  20
    /  \
   15   7

There are two left leaves in the binary tree, with values 9 and 15 respectively. Return 24.
*/

// first pass solution: Recursive DFT
var sumOfLeftLeaves = function(root, left=false) {
    if (!root) return 0;
    if (!root.left && !root.right && left) return root.val;
    let leftSide = sumOfLeftLeaves(root.left, true);
    let rightSide = sumOfLeftLeaves(root.right, false);
    return leftSide + rightSide;
};

// second pass solution: Iterative DFT
var sumOfLeftLeaves = function(root) {
    if (!root) return 0;
    
    let stack = [[root, false]];
    let leftSum = 0;
    
    while (stack.length) {
        let [node, isLeft] = stack.pop();
        
        if (!node.left && !node.right && isLeft) leftSum += node.val;
        if (node.left) stack.push([node.left, true]);
        if (node.right) stack.push([node.right, false]);
    }
    return leftSum;
};

