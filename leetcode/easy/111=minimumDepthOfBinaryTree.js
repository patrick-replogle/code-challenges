// Given a binary tree, find its minimum depth.

// The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.

// Note: A leaf is a node with no children.

// Example 1:

// Input: root = [3,9,20,null,null,15,7]
// Output: 2
// Example 2:

// Input: root = [2,null,3,null,4,null,5,null,6]
// Output: 5

// first pass iterative solution using BST/queue
var minDepth = function(root) {
    if (!root) return 0;
    
    let queue = [[root, 1]];
    
    while (queue.length > 0) {
        let [node, depth] = queue.shift();
        
        if (!node.left && !node.right) {
            return depth;
        }
        
        if (node.left) queue.push([node.left, depth + 1]);
        if (node.right) queue.push([node.right, depth + 1]);
    }
};

// second pass recursive solution
var minDepth = function(root) {
    if (!root) return 0;
    else if (root && !root.left && !root.right) return 1;
    else if (root.left && !root.right) return minDepth(root.left) + 1;
    else if (root.right && !root.left) return minDepth(root.right) + 1;
    else return Math.min(minDepth(root.left) + 1, minDepth(root.right) + 1);
};
