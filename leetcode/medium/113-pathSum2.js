// Given a binary tree and a sum, find all root-to-leaf paths where each path's sum equals the given sum.

// Note: A leaf is a node with no children.

// Example:

// Given the below binary tree and sum = 22,

//       5
//      / \
//     4   8
//    /   / \
//   11  13  4
//  /  \    / \
// 7    2  5   1
// Return:

// [
//    [5,4,11,2],
//    [5,8,4,5]
// ]

// first pass recursive DFT solution
var pathSum = function(root, sum) {
    if (!root) return [];
    
    let paths = [];
    
    function DFT(node, path, sum) {
        if (!node.left && !node.right && sum === 0) {
            return paths.push(path);
        }
        if (node.left) DFT(node.left, [...path, node.left.val], sum - node.left.val);
        if (node.right) DFT(node.right, [...path, node.right.val], sum - node.right.val);
    }
    
    DFT(root, [root.val], sum - root.val);
    return paths;
}   

// second pass iterative solution
var pathSum = function(root, sum) {
    if (!root) return [];
    let paths = [];
    let stack = [[root, [root.val], sum - root.val]];
    
    while (stack.length > 0) {
        let [node, path, currSum] = stack.pop();
        
        if (!node.left && !node.right && currSum === 0) {
            paths.push(path);
        }
        
        if (node.left) {
            stack.push([node.left, [...path, node.left.val], currSum - node.left.val]);
        }
        
        if (node.right) {
            stack.push([node.right, [...path, node.right.val], currSum - node.right.val]);
        }
    }
    return paths;
}  
