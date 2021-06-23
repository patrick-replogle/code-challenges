// Given the root of a binary tree, return an array of the largest value in each row of the tree (0-indexed).

// Example 1:

// Input: root = [1,3,2,5,3,null,9]
// Output: [1,3,9]
// Example 2:

// Input: root = [1,2,3]
// Output: [1,3]
// Example 3:

// Input: root = [1]
// Output: [1]

// first pass solution using a queue/BFT 
var largestValues = function(root) {
    if (!root) return [];
    
    let output = [];
    let queue = [root];
    
    while (queue.length > 0) {
        let len = queue.length;
        let largest = -Infinity;
        
        for (let i = 0; i < len; i++) {
            let currNode = queue.shift();
            if (currNode.val > largest) largest = currNode.val;
            if (currNode.left) queue.push(currNode.left);
            if (currNode.right) queue.push(currNode.right);
        }
        output.push(largest);
    }
    return output;
};
