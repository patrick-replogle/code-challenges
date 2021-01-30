/*
Given a binary tree root and an integer target, delete all the leaf nodes with value target.

Note that once you delete a leaf node with value target, if it's parent node becomes a leaf node and has the value target, it 
should also be deleted (you need to continue doing that until you can't).

Example 1:
Input: root = [1,2,3,2,null,2,4], target = 2
Output: [1,null,3,null,4]
Explanation: Leaf nodes in green with value (target = 2) are removed (Picture in left). 
After removing, new nodes become leaf nodes with value (target = 2) (Picture in center).

Example 2:
Input: root = [1,3,3,3,2], target = 3
Output: [1,3,null,null,2]

Example 3:
Input: root = [1,2,null,2,null,2], target = 2
Output: [1]
Explanation: Leaf nodes in green with value (target = 2) are removed at each step.
*/

// first pass solution
var removeLeafNodes = function(root, target) {    
    function dfs(root) {
        if (!root) return null;
        if (root.left) root.left = dfs(root.left);
        if (root.right) root.right = dfs(root.right);
        if (root.val === target && !root.left && !root.right){
            return null;
        }
        return root;
    }
    
    dfs(root);
    
    if (root.val === target && !root.left && !root.right) {
        return null;
    }
    return root;
};