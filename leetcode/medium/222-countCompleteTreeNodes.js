/*
Given the root of a complete binary tree, return the number of the nodes in the tree.

According to Wikipedia, every level, except possibly the last, is completely filled in a complete binary tree, and all nodes in the 
last level are as far left as possible. It can have between 1 and 2h nodes inclusive at the last level h.

Example 1:
Input: root = [1,2,3,4,5,6]
Output: 6
*/

// first pass solution
var countNodes = function(root) {
    if (!root) return 0;
    
    let count = 0;
    
    function dft(root) {
        count++;
        if (root.left) dft(root.left);
        if (root.right) dft(root.right);
    }
    dft(root);
    
    return count;
};
