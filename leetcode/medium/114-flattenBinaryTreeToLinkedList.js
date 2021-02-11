/*
Given the root of a binary tree, flatten the tree into a "linked list":

The "linked list" should use the same TreeNode class where the right child pointer points to the next node in the list and the left 
child pointer is always null.
The "linked list" should be in the same order as a pre-order traversal of the binary tree.
 
Example 1:
Input: root = [1,2,5,3,4,null,6]
Output: [1,null,2,null,3,null,4,null,5,null,6]

Example 2:
Input: root = []
Output: []

Example 3:
Input: root = [0]
Output: [0]
*/

// first pass solution
var flatten = function(root) {
    if (!root) return null;
    
    let dummy = new TreeNode(0);
    let ref = dummy;
    
    function traverse(root) {
        dummy.right = new TreeNode(root.val);
        dummy = dummy.right;
        if (root.left) traverse(root.left);
        if (root.right) traverse(root.right);
    }
    
    traverse(root);
    root.left = null;
    root.right = ref.right.right;
    
    return root;
};

