// You are given the root of a binary tree where each node has a value 0 or 1.  Each root-to-leaf path represents a binary number 
// starting with the most significant bit.  For example, if the path is 0 -> 1 -> 1 -> 0 -> 1, then this could represent 01101 in binary, which is 13.

// For all leaves in the tree, consider the numbers represented by the path from the root to that leaf.

// Return the sum of these numbers. The answer is guaranteed to fit in a 32-bits integer.

// Example 1:
// Input: root = [1,0,1,0,1,0,1]
// Output: 22
// Explanation: (100) + (101) + (110) + (111) = 4 + 5 + 6 + 7 = 22

// first pass iterative solution
var sumRootToLeaf = function(root) {
    let output = 0;
    
    let stack = [[root, '']];
    
    while (stack.length) {
        let [currNode, path] = stack.pop();
        
        if (!currNode.left && !currNode.right) {
            output += parseInt(path + currNode.val, 2);
        }
        if (currNode.left) stack.push([currNode.left, path + currNode.val]);
        if (currNode.right) stack.push([currNode.right, path + currNode.val]);
    }
    return output;
};

// second pass recursive solution
var sumRootToLeaf = function(root) {
    if (!root) return 0;
    
    let output = 0;
    
    function dft(root, path) {
        if (!root.left && !root.right) {
            output += parseInt(path + root.val, 2);
        }
        
        if (root.left) dft(root.left, path + root.val);
        if (root.right) dft(root.right, path + root.val);
    }
    
    dft(root, '');
    return output;
};
