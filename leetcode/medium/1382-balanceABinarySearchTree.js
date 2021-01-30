/*
Given a binary search tree, return a balanced binary search tree with the same node values.

A binary search tree is balanced if and only if the depth of the two subtrees of every node never differ by more than 1.

If there is more than one answer, return any of them.

Example 1:
Input: root = [1,null,2,null,3,null,4,null,null]
Output: [2,1,3,null,null,null,4]
Explanation: This is not the only correct answer, [3,1,4,null,2,null,null] is also correct.
*/

// first pass solution
var balanceBST = function(root) {
    let values = inorderTraversal(root, []);
    return constructBST(values);
};

var inorderTraversal = function(root, arr) {
    if (root.left) inorderTraversal(root.left, arr);
    arr.push(root.val);
    if (root.right) inorderTraversal(root.right, arr);
    return arr;
}

var constructBST = function(values) {
    if (!values.length) return null;
    let mid = Math.floor((values.length) / 2);
    let root = new TreeNode(values[mid]);
    root.left = constructBST(values.slice(0, mid));
    root.right = constructBST(values.slice(mid + 1));
    return root;
}

// second pass solution using much less memory
var balanceBST = function(root) {
    let values = inorderTraversal(root, []);
    return constructBST(values, 0, values.length - 1);
};

var inorderTraversal = function(root, arr) {
    if (root.left) inorderTraversal(root.left, arr);
    arr.push(root.val);
    if (root.right) inorderTraversal(root.right, arr);
    return arr;
}

var constructBST = function(values, left, right) {
    if (left > right) return null;
    
    let mid = Math.floor((left + right) / 2);
    let root = new TreeNode(values[mid]);
    root.left = constructBST(values, left, mid - 1);
    root.right = constructBST(values, mid + 1, right);
    return root;
}
