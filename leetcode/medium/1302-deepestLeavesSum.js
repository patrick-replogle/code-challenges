// Given a binary tree, return the sum of values of its deepest leaves.
 
// Example 1:
// Input: root = [1,2,3,4,5,null,6,7,null,null,null,null,8]
// Output: 15

// first pass recursive DFT solution
var deepestLeavesSum = function(root) {
    if (!root) return 0;
    if (!root.left && !root.right) return root.val;
    
    let sum = 0;
    let maxDepth = 0;
    
    function findMaxDepth(root, depth) {
        if (!root.left && !root.right) maxDepth = Math.max(maxDepth, depth)
        if (root.left) findMaxDepth(root.left, depth + 1);
        if (root.right) findMaxDepth(root.right, depth + 1);
    }
    
    function traverse(root, depth) {
        if (depth === maxDepth) sum += root.val;
        if (root.left) traverse(root.left, depth + 1);
        if (root.right) traverse(root.right, depth + 1);
    }
    findMaxDepth(root, 1);
    traverse(root, 1);
    return sum;
};

// second pass iterative BFT solution 
var deepestLeavesSum = function(root) {
    if (!root) return 0;
    if (!root.left && !root.right) return root.val;
    
    let queue = [root];
    let sum = 0;
    
    while (queue.length) {
        let len = queue.length;
        for (let i = 0; i < len; i++) {
            let curr = queue.shift();
            sum += curr.val;
            if (curr.left) queue.push(curr.left);
            if (curr.right) queue.push(curr.right);
        }
        if (queue.length) {
            sum = 0;
        } 
    }
    return sum;
};
