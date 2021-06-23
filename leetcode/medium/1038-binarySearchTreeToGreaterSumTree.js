// Given the root of a Binary Search Tree (BST), convert it to a Greater Tree such that every key of the original BST is changed to 
// the original key plus sum of all keys greater than the original key in BST.

// As a reminder, a binary search tree is a tree that satisfies these constraints:

// The left subtree of a node contains only nodes with keys less than the node's key.
// The right subtree of a node contains only nodes with keys greater than the node's key.
// Both the left and right subtrees must also be binary search trees.

// first pass iterative solution
var bstToGst = function(root) {
    let sum = 0;
    let stack = [];
    let curr = root;
    
    while (stack.length || curr) {
        while (curr) {
            stack.push(curr);
            curr = curr.right;
        }
        curr = stack.pop();
        sum += curr.val;
        curr.val = sum;
        curr = curr.left;
    }
    return root;
};

// second pass recursive solution
var bstToGst = function(root) {
    if (!root) return null;
    
    let sum = 0;
    
    function inorderTraversal(root) {
        if (root.right) inorderTraversal(root.right);
        sum += root.val;
        root.val = sum;
        if (root.left) inorderTraversal(root.left);
    }
    inorderTraversal(root);

    return root;
};
