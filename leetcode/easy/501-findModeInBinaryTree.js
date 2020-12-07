// Given a binary search tree (BST) with duplicates, find all the mode(s) (the most frequently occurred element) in the given BST.

// Assume a BST is defined as follows:

// The left subtree of a node contains only nodes with keys less than or equal to the node's key.
// The right subtree of a node contains only nodes with keys greater than or equal to the node's key.
// Both the left and right subtrees must also be binary search trees.
 

// For example:
// Given BST [1,null,2,2],

//    1
//     \
//      2
//     /
//    2

// return [2].

// first pass solution using a stack and dict to count occurences of each value
var findMode = function(root) {
    if (!root) return [];
    
    let dict = {};
    let stack = [root];
    let output = [];
    
    while (stack.length > 0) {
        let curr = stack.pop();
        
        if (!(curr.val in dict)) {
            dict[curr.val] = 0;
        }
        dict[curr.val]++;
        
        if (curr.left) stack.push(curr.left);
        if (curr.right) stack.push(curr.right);
    }
    
    let max = Math.max(...Object.values(dict));
    
    for (let key in dict) {
        if (dict[key] === max) {
            output.push(key)
        }  
    }
    return output;
};

// same solution, but using recursion instead of an iterative approach
var findMode = function(root) {
    if (!root) return [];
    
    let dict = {};
    let output = [];
    
    function traverse(node) {
        if (!(node.val in dict)) {
            dict[node.val] = 0;
        }
        dict[node.val]++;
        
        if (node.left) traverse(node.left);
        if (node.right) traverse(node.right);
    }
    
    traverse(root); 
    
    let max = Math.max(...Object.values(dict)); 
    
    for (let key in dict) {
        if (dict[key] === max) {
            output.push(key)
        }  
    }
    return output;
};
