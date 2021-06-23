// Given a binary tree, return the bottom-up level order traversal of its nodes' values. (ie, from left to right, level by level from leaf to root).

// For example:
// Given binary tree [3,9,20,null,null,15,7],
//     3
//    / \
//   9  20
//     /  \
//    15   7
// return its bottom-up level order traversal as:
// [
//   [15,7],
//   [9,20],
//   [3]
// ]

// first class solution using bft and queue
var levelOrderBottom = function(root) {
    if (!root) return [];
    
    let levels = [];
    let queue = [root];

    while (queue.length > 0) {
        let len = queue.length;
        let temp = [];
        
        for (let i = 0; i < len; i++) {
            let curr = queue.shift();
            temp.push(curr.val);
            if (curr.left) queue.push(curr.left);
            if (curr.right) queue.push(curr.right);
        }
        levels.push(temp);
    }
    return levels.reverse();
};
