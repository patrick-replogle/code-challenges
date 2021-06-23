// Given a Binary Search Tree (BST) with the root node root, return the minimum difference between the values of any two different nodes in the tree.

// Example :
// Input: root = [4,2,6,1,3,null,null]
// Output: 1
// Explanation:
// Note that root is a TreeNode object, not an array.

// The given tree [4,2,6,1,3,null,null] is represented by the following diagram:
//           4
//         /   \
//       2      6
//      / \    
//     1   3  

// while the minimum difference in this tree is 1, it occurs between node 1 and node 2, also between node 3 and node 2.

// first pass solution using inorder traversal and then comparing differences
var minDiffInBST = function(root) {
    if (!root) return null;
    
    let values = [];
    let min = Infinity;
    
    function inorder(root) {
        if (root.left) inorder(root.left);
        values.push(root.val);
        if (root.right) inorder(root.right);
    }
    inorder(root);
    
    for (let i = 0; i < values.length - 1; i++) {
        min = Math.min(min, Math.abs(values[i] - values[i+1]))
    }
    return min;
};
