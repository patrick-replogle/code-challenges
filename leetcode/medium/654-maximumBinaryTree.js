// You are given an integer array nums with no duplicates. A maximum binary tree can be built recursively from nums using the following algorithm:

// Create a root node whose value is the maximum value in nums.
// Recursively build the left subtree on the subarray prefix to the left of the maximum value.
// Recursively build the right subtree on the subarray suffix to the right of the maximum value.
// Return the maximum binary tree built from nums.

// recursive solution
var constructMaximumBinaryTree = function(nums) {
    if (!nums.length) return null;
    
    let max = Math.max(...nums);
    let index = nums.indexOf(max);
    let head = new TreeNode(max);
    head.left = constructMaximumBinaryTree(nums.slice(0, index));
    head.right = constructMaximumBinaryTree(nums.slice(index + 1));
    
    return head;
};

