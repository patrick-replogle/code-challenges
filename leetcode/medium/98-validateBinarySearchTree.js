// Given a binary tree, determine if it is a valid binary search tree (BST).

// Assume a BST is defined as follows:

// The left subtree of a node contains only nodes with keys less than the node's key.
// The right subtree of a node contains only nodes with keys greater than the node's key.
// Both the left and right subtrees must also be binary search trees.
 
// Example 1:

//     2
//    / \
//   1   3

// Input: [2,1,3]
// Output: true
// Example 2:

//     5
//    / \
//   1   4
//      / \
//     3   6

// Input: [5,1,4,null,null,3,6]
// Output: false
// Explanation: The root node's value is 5 but its right child's value is 4.

// first pass solution => inorder traversal using array to store values inorder and flag if the current value less than or equal to the previous value
var isValidBST = function(root) {
    if (!root) return null;
    
    let arr = [];
    let isEqual = true;
    
    function inorder(root) {  
        if (root.left) inorder(root.left);
        
        if (arr.length > 0 && arr[arr.length - 1] >= root.val) isEqual = false; // flag unbalanced tree

        arr.push(root.val);
        
        if (root.right) inorder(root.right);
    }  
    
    inorder(root);
    
    return isEqual;
};


// second pass solution: similar as the first, but using constant memory this time
var isValidBST = function(root) {
    if (!root) return null;
    
    let currVal = -Infinity;
    let isEqual = true;
    
    function inorder(root) {  
        if (root.left) inorder(root.left);
        
        if (currVal >= root.val) isEqual = false; // flag unbalanced tree

        currVal = root.val;
        
        if (root.right) inorder(root.right);
    }  
    
    inorder(root);
 
    return isEqual;
};
