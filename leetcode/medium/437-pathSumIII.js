// You are given a binary tree in which each node contains an integer value.

// Find the number of paths that sum to a given value.

// The path does not need to start or end at the root or a leaf, but it must go downwards (traveling only from parent nodes to child nodes).

// The tree has no more than 1,000 nodes and the values are in the range -1,000,000 to 1,000,000.

// Example:

// root = [10,5,-3,3,2,null,11,3,-2,null,1], sum = 8

//       10
//      /  \
//     5   -3
//    / \    \
//   3   2   11
//  / \   \
// 3  -2   1

// Return 3. The paths that sum to 8 are:

// 1.  5 -> 3
// 2.  5 -> 2 -> 1
// 3. -3 -> 11

// first pass solution using a stack and a recursive DFT helper function
var pathSum = function(root, sum) {    
    if (!root) return 0;
    
    let stack = [root];
    let output = 0;
    
    function DFT(node, currSum) {
        if (!node) return;
        
        currSum += node.val;
        if (currSum === sum) output++;
        
        DFT(node.left, currSum);
        DFT(node.right, currSum);
    }
    
    while (stack.length > 0) {
        let curr = stack.pop();
        
        DFT(curr, 0);
        
        if (curr.left) stack.push(curr.left);
        if (curr.right) stack.push(curr.right);
    }
    return output;
};

