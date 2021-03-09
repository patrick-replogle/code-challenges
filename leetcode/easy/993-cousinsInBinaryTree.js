/*
In a binary tree, the root node is at depth 0, and children of each depth k node are at depth k+1.

Two nodes of a binary tree are cousins if they have the same depth, but have different parents.

We are given the root of a binary tree with unique values, and the values x and y of two different nodes in the tree.

Return true if and only if the nodes corresponding to the values x and y are cousins.

Example 1:
Input: root = [1,2,3,4], x = 4, y = 3
Output: false

Example 2:
Input: root = [1,2,3,null,4,null,5], x = 5, y = 4
Output: true
*/

// first pass solution
var isCousins = function(root, x, y) {
    let dict = { x: null, y: null };
    
    function traverse(parent, root, depth) {
        if (root.val === x) dict[x] = [parent, depth];
        else if (root.val === y) dict[y] = [parent, depth];
        
        if (root.left) traverse(root.val, root.left, depth + 1);    
        if (root.right) traverse(root.val, root.right, depth + 1);
    }
    
    traverse(null, root, 0);
    
    return dict[x][0] !== dict[y][0] && dict[x][1] === dict[y][1];
};
