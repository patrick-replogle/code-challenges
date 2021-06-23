// Given the root node of a binary search tree, return the sum of values of all nodes with a value in the range [low, high].

// Example 1:
// Input: root = [10,5,15,3,7,null,18], low = 7, high = 15
// Output: 32

// Example 2:
// Input: root = [10,5,15,3,7,13,18,1,null,6], low = 6, high = 10
// Output: 23

// first pass solution using DFT
var rangeSumBST = function(root, low, high) {
    if (!root) return 0;
    
    let sum = 0;
    let stack = [root];
    
    while (stack.length) {
        let curr = stack.pop();
        
        if (curr.val >= low && curr.val <= high) sum += curr.val;
        if (curr.left) stack.push(curr.left);
        if (curr.right) stack.push(curr.right);
    }
    return sum;
};
