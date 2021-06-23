/*
Note: Your solution should have only one BST traversal and O(1) extra space complexity, since this is what you will be asked to 
accomplish in an interview.

A tree is considered a binary search tree (BST) if for each of its nodes the following is true:

The left subtree of a node contains only nodes with keys less than the node's key.
The right subtree of a node contains only nodes with keys greater than the node's key.
Both the left and the right subtrees must also be binary search trees.
Given a binary search tree t, find the kth smallest element in it.

Note that kth smallest element means kth element in increasing order. See examples for better understanding.

Example

For

t = {
    "value": 3,
    "left": {
        "value": 1,
        "left": null,
        "right": null
    },
    "right": {
        "value": 5,
        "left": {
            "value": 4,
            "left": null,
            "right": null
        },
        "right": {
            "value": 6,
            "left": null,
            "right": null
        }
    }
}
and k = 4, the output should be
kthSmallestInBST(t, k) = 5.

Here is what t looks like:

   3
 /   \
1     5
     / \
    4   6
The values of t are [1, 3, 4, 5, 6], and the 4th smallest is 5.
*/

// first pass solution using extra memory
function kthSmallestInBST(t, k) {
    if (!t) return null;
    
    let values = [];
    
    function inorderTraversal(root) {
        if (root.left) inorderTraversal(root.left);
        values.push(root.value);
        if (root.right) inorderTraversal(root.right);
    }
    inorderTraversal(t);
    
    return values[k - 1];
}

// second pass solution
function kthSmallestInBST(t, k) {
    if (!t) return null;
    
    let output = null;
    let count = 0;
    
    function inorderTraversal(root) {
        if (root.left) inorderTraversal(root.left);
        count++;
        if (count === k) output = root.value;
        if (root.right) inorderTraversal(root.right);
    }
    inorderTraversal(t, 0);
    
    return output;
}
