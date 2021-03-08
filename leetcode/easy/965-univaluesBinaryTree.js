/*
A binary tree is univalued if every node in the tree has the same value.

Return true if and only if the given tree is univalued.

Example 1:
Input: [1,1,1,1,1,null,1]
Output: true

Example 2:
Input: [2,2,2,5,2]
Output: false
*/

// first pass solution
var isUnivalTree = function(root) {
    if (!root) return null;
    
    let values = new Set();
    
    function traverse(root) {
        if (values.size > 1) return;
        values.add(root.val);
        if (root.left) traverse(root.left);
        if (root.right) traverse(root.right);
    }
    traverse(root);
    
    return values.size <= 1;
};
