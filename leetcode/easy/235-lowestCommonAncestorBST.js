// Given a binary search tree (BST), find the lowest common ancestor (LCA) of two given nodes in the BST.

// According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes p and q as the lowest 
// node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).”

// Example 1:

// Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8
// Output: 6
// Explanation: The LCA of nodes 2 and 8 is 6.

// iterative solution
var lowestCommonAncestor = function(root, p, q) {
    if (!root) return null;
    
    while (root) {
        if (root.val > Math.max(p.val, q.val)) root = root.left;
        else if (root.val < Math.min(p.val, q.val)) root = root.right;
        else return root;
    }
};

// recursive solution
var lowestCommonAncestor = function(root, p, q) {
    if (!root) return null;
    
    if (root.val > Math.max(p.val, q.val)) {
        return lowestCommonAncestor(root.left, p, q);
    }
    
    else if (root.val < Math.min(p.val, q.val)) {
        return lowestCommonAncestor(root.right, p, q);
    }
    
    else {
        return root;
    }
};
