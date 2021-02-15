/*
Given the root of a Binary Search Tree (BST), convert it to a Greater Tree such that every key of the original BST is changed to the 
original key plus sum of all keys greater than the original key in BST.

As a reminder, a binary search tree is a tree that satisfies these constraints:

The left subtree of a node contains only nodes with keys less than the node's key.
The right subtree of a node contains only nodes with keys greater than the node's key.
Both the left and right subtrees must also be binary search trees.
Note: This question is the same as 1038: https://leetcode.com/problems/binary-search-tree-to-greater-sum-tree/

Example 1:
Input: root = [4,1,6,0,2,5,7,null,null,null,3,null,null,null,8]
Output: [30,36,21,36,35,26,15,null,null,null,33,null,null,null,8]
*/

// first pass solution: brute force inorder traversal
var convertBST = function(root) {
    if (!root) return null;
    
    let values = [];
    
    function inorder(root) {
        if (root.left) inorder(root.left);
        values.push(root.val);
        if (root.right) inorder(root.right);
    }
    
    function convert(root) {
        if (root.left) convert(root.left);

        let i = values.length - 1;
        let sum = 0;
        while (values[i] > root.val) {
            sum += values[i];
            i--;
        }
        root.val += sum;
        
        if (root.right) convert(root.right);
    }
    
    inorder(root);
    convert(root);
    
    return root;
};



// second pass solution
var convertBST = function(root) {
    if (!root) return null;
    
    let sum = 0;
    
    function convert(root) {
        if (root.right) convert(root.right);
        sum += root.val;
        root.val = sum;
        if (root.left) convert(root.left);
    }
    convert(root);
    
    return root;
};

