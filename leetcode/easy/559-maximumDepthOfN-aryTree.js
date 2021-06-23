// Given a n-ary tree, find its maximum depth.

// The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

// Nary-Tree input serialization is represented in their level order traversal, each group of children is separated by the null value (See examples).

// Example 1:

// Input: root = [1,null,3,2,4,null,5,6]
// Output: 3
// Example 2:

// Input: root = [1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14]
// Output: 5

// first pass solution using recursive dft
var maxDepth = function(root) {
    if (!root) return 0;
    if (root.children.length === 0) return 1;
    
    let maxDepth = 0;
    
    function dft(root, depth) {
        if (!root) return;
        
        maxDepth = Math.max(maxDepth, depth);
        
        for (let child of root.children) {
            dft(child, depth + 1);
        }
    }
    
    dft(root, 1);
    return maxDepth;
};

// second pass solution using iterative dft
var maxDepth = function(root) {
    if (!root) return 0;
    if (root.children.length === 0) return 1;
    
    let maxDepth = 0;
    let stack = [[root, 1]];
    
    while (stack.length) {
        let [node, currDepth] = stack.pop();
        
        maxDepth = Math.max(maxDepth, currDepth);
        
        for (let child of node.children) {
            stack.push([child, currDepth + 1]);
        }
    }
    return maxDepth;
};
