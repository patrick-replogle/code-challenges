
/*
Given a binary tree, return the sum of values of nodes with even-valued grandparent.  (A grandparent of a node is the parent of 
its parent, if it exists.)

If there are no nodes with an even-valued grandparent, return 0.

Example 1:
Input: root = [6,7,8,2,7,1,3,9,null,1,4,null,null,null,5]
Output: 18
Explanation: The red nodes are the nodes with even-value grandparent while the blue nodes are the even-value grandparents.
*/

// first pass solution using iterative BFS
var sumEvenGrandparent = function(root) {
    if (!root) return 0;
    
    let queue = [root];
    let output = 0;
    
    while (queue.length) {
        let len = queue.length;
        
        for (let i = 0; i < len; i++) {
            let node = queue.shift();
            
            if (node.val % 2 === 0) {
                if (node.left && node.left.left) output += node.left.left.val;
                if (node.left && node.left.right) output += node.left.right.val;
                if (node.right && node.right.left) output += node.right.left.val;
                if (node.right && node.right.right) output += node.right.right.val;
            }
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
    }
    return output;
};

// second pass solution using recursive DFS
var sumEvenGrandparent = function(root) {
    if (!root) return 0;

    let output = 0;
    
    function DFS(node) {    
        if (node.val % 2 === 0) {
            if (node.left && node.left.left) output += node.left.left.val;
            if (node.left && node.left.right) output += node.left.right.val;
            if (node.right && node.right.left) output += node.right.left.val;
            if (node.right && node.right.right) output += node.right.right.val;
        }
        if (node.left && (node.left.left || node.left.right)) DFS(node.left);
        if (node.right && (node.right.left || node.right.right)) DFS(node.right);
    }
    DFS(root);
    return output;
};
