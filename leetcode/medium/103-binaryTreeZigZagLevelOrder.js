// Given a binary tree, return the zigzag level order traversal of its nodes' values. (ie, from left to right, then right to left 
// for the next level and alternate between).

// For example:
// Given binary tree [3,9,20,null,null,15,7],
//     3
//    / \
//   9  20
//     /  \
//    15   7
// return its zigzag level order traversal as:
// [
//   [3],
//   [20,9],
//   [15,7]
// ]

// first pass solution using BFS to traverse the BST level by level, reversing the order of the nodes of each level every other iteration
var zigzagLevelOrder = function(root) {
    if (!root) return [];
    
    let queue = [root];
    let output = [];
    let reverse = false;
    
    while (queue.length) {
        let len = queue.length;
        let temp = [];
        
        for (let i = 0; i < len; i++) {
            let currNode = queue.shift();
            temp.push(currNode.val);
            if (currNode.left) queue.push(currNode.left);
            if (currNode.right) queue.push(currNode.right);
        }
        if (reverse) {
            output.push(temp.reverse());
        } else {
            output.push(temp);
        }
        reverse = !reverse;
    }
    return output;
};

