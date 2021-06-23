// You are given the root node of a binary search tree (BST) and a value to insert into the tree. Return the root node of the BST after 
// the insertion. It is guaranteed that the new value does not exist in the original BST.

// Notice that there may exist multiple valid ways for the insertion, as long as the tree remains a BST after insertion. You can return any of them.

// Example 1:
// Input: root = [4,2,7,1,3], val = 5
// Output: [4,2,7,1,3,5]
// Explanation: Another accepted tree is:

// first pass recursive solution
var insertIntoBST = function(root, val) {
    if (!root) return new TreeNode(val);
    
    function insert(node) {
        if (val < node.val) {
            if (!node.left) {
                node.left = new TreeNode(val);
            } else {
                insert(node.left);
            }
        }
        else if (val > node.val) {
            if (!node.right) {
                node.right = new TreeNode(val);
            } else {
                insert(node.right);
            }
        }
    }
    insert(root);
    return root;
};

// second pass iterative solution
var insertIntoBST = function(root, val) {
    if (!root) return new TreeNode(val);
    
    let stack = [root];
    
    while (stack.length) {
        let curr = stack.pop();
        
        if (val < curr.val) {
            if (!curr.left) {
                curr.left = new TreeNode(val);
            } else {
                stack.push(curr.left);
            }
        }
        else if (val > curr.val) {
            if (!curr.right) {
                curr.right = new TreeNode(val);
            } else {
                stack.push(curr.right);
            }
        }
    }
    return root;
};
