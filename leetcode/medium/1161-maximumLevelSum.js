// Given the root of a binary tree, the level of its root is 1, the level of its children is 2, and so on.

// Return the smallest level x such that the sum of all the values of nodes at level x is maximal.

// Example 1:
// Input: root = [1,7,0,7,-8,null,null]
// Output: 2
// Explanation: 
// Level 1 sum = 1.
// Level 2 sum = 7 + 0 = 7.
// Level 3 sum = 7 + -8 = -1.
// So we return the level with the maximum sum which is level 2.

// first pass solution using BFT / queue to calculate maxSum of each level
var maxLevelSum = function(root) {
    if (!root) return 0;
    
    let queue = [root];
    let currLevel = 1;
    let maxSum = root.val;
    let maxLevel = 1;
    
    while (queue.length) {
        let len = queue.length;
        let currSum = 0;
        
        for (let i = 0; i < len; i++) {
            let node = queue.shift();
            currSum += node.val;
            
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        if (currSum > maxSum) {
            maxSum = currSum;
            maxLevel = currLevel;
        }
        currLevel++;
    }
    return maxLevel;
};
