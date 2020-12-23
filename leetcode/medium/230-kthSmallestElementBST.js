// Given a binary search tree, write a function kthSmallest to find the kth smallest element in it.

// Example 1:

// Input: root = [3,1,4,null,2], k = 1
//    3
//   / \
//  1   4
//   \
//    2
// Output: 1
// Example 2:

// Input: root = [5,3,6,2,4,null,null,1], k = 3
//        5
//       / \
//      3   6
//     / \
//    2   4
//   /
//  1
// Output: 3

// solution using a stack / iterative DFS
var kthSmallest = function(root, k) {
    if (!root) return null;
    
    let stack = [];
    
    while (stack.length > 0 || root) {
        while (root) {
            stack.push(root);
            root = root.left;
        }
        root = stack.pop();
        k--;
        
        if (k === 0) return root.val;
        root = root.right;
    }
};

// recursive solution
var kthSmallest = function(root, k) {
    if (!root) return null;
    
    let result = 0;
    
    function DFT(root) {
        if (root) {
            DFT(root.left);
            k--;
            if (k === 0) {
                result = root.val;
                return;
            }
            DFT(root.right);
        }
    }
    DFT(root);
    
    return result;
};

// recursive inorder traversal
var kthSmallest = function(root, k) {
    if (!root) return null;
    
    let values = [];
    
    function inOrderTraversal(root) {
        if (root.left) inOrderTraversal(root.left);
        
        values.push(root.val);
        
        if (root.right) inOrderTraversal(root.right);
    }
    
    inOrderTraversal(root);
    
    return values[k - 1];
};

// same approach as above, but using constant memory
var kthSmallest = function(root, k) {
    if (!root) return null;
    
    let min;
    
    function inorderTraversal(root) {
        if (root.left) inorderTraversal(root.left);
        
        k--;
        if (k === 0) min = root.val;
        
        if (root.right) inorderTraversal(root.right);
    }
    inorderTraversal(root);
    return min;
};
