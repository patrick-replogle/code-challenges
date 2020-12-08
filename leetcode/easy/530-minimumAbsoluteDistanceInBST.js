// Given a binary search tree with non-negative values, find the minimum absolute difference between values of any two nodes.

// Example:

// Input:

//    1
//     \
//      3
//     /
//    2

// Output:
// 1

// Explanation:
// The minimum absolute difference is 1, which is the difference between 2 and 1 (or between 2 and 3).

// first pass solution
var getMinimumDifference = function(root) {
    let values = [];
    let output = Infinity;
    
    function traverse(node) {
        values.push(node.val);
        if (node.left) traverse(node.left);
        if (node.right) traverse(node.right);
    }
    
    traverse(root);
    values.sort((a, b) => a - b);
    
    for (let i = 1; i < values.length; i++) {
        if (values[i] - values[i-1] < output) {
            output = values[i] - values[i-1];
        }
    }
    return output;
};

// second pass solution without using extra memory or sorting
var getMinimumDifference = function(root) {
    let prev = null;
    let min = Infinity;
    
    function inOrderTraversal(node) { 
        if (node.left) inOrderTraversal(node.left);
        
        if (prev !== null) {
            min = Math.min(min, node.val - prev);
        }
        prev = node.val;

        if (node.right) inOrderTraversal(node.right);
    }
    
    inOrderTraversal(root);
    
    return min;
};
