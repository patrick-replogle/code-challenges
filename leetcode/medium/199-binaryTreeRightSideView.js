// Given a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.

// Example:

// Input: [1,2,3,null,5,null,4]
// Output: [1, 3, 4]
// Explanation:

//    1            <---
//  /   \
// 2     3         <---
//  \     \
//   5     4       <---

// first pass solution:
// My approach to solving this problem is to use a queue to perform a breadth first traversal of the tree. We will deque all 
// of the nodes of the current level at every iteration, and the last node removed from the queue at each iteration will be the 
// one we add to the output array at the end, since that will be the one we can view from the right side of the tree.
var rightSideView = function(root) {
    if (!root) return [];

    let output = [];
    let queue = [root]
    
    while (queue.length > 0) {
        let len = queue.length;
        let rightViewNode;
        
        for (let i = 0; i < len; i++) {
            rightViewNode = queue.shift();
            if (rightViewNode.left) queue.push(rightViewNode.left);
            if (rightViewNode.right) queue.push(rightViewNode.right);
        }
        output.push(rightViewNode.val);
    }
    return output;
};
