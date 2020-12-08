// Given a binary tree, find the leftmost value in the last row of the tree.

// Example 1:
// Input:

//     2
//    / \
//   1   3

// Output:
// 1
// Example 2:
// Input:

//         1
//        / \
//       2   3
//      /   / \
//     4   5   6
//        /
//       7

// Output:
// 7

// first pass solution using a queue and BFS to find left most node on each level of tree
var findBottomLeftValue = function(root) {
    let levels = [];
    let queue = [root];
    
    while (queue.length > 0) {
        levels.push(queue[0].val);
        let len = queue.length;
        
        for (let i = 0; i < len; i++) {
            let curr = queue.shift();
            if (curr.left) queue.push(curr.left);
            if (curr.right) queue.push(curr.right);
        }
        
    }
    return levels[levels.length - 1];
};
