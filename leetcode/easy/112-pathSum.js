// Given a binary tree and a sum, determine if the tree has a root-to-leaf path such that adding up all the values along 
// the path equals the given sum.

// Note: A leaf is a node with no children.

// Example:

// Given the below binary tree and sum = 22,

//       5
//      / \
//     4   8
//    /   / \
//   11  13  4
//  /  \      \
// 7    2      1
// return true, as there exist a root-to-leaf path 5->4->11->2 which sum is 22.

// first pass iterative solution
var hasPathSum = function(root, sum) {
    let stack = [[root, sum]];
    
    while (stack.length > 0) {
        let [node, currSum] = stack.pop();
   
        if (!node) continue;
        if (!node.left && !node.right && currSum - node.val === 0) {
            return true;
        }
        stack.push([node.left, currSum - node.val]);
        stack.push([node.right, currSum - node.val]);
    }
    return false;
};

// second pass recursive solution
var hasPathSum = function(root, sum) {
    if (!root) return false; 
    if (!root.left && !root.right) return sum === root.val;

    return hasPathSum(root.left, sum - root.val) || hasPathSum(root.right, sum - root.val);
};
