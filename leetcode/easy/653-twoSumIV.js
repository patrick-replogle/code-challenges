// Given the root of a Binary Search Tree and a target number k, return true if there exist two elements in the BST such that 
// their sum is equal to the given target.

// first pass recursive solution
var findTarget = function(root, k) {
    if (!root) return false;
    if (!root.left && !root.right) return false;
    
    let set = new Set();
    let flag = false;
    
    function traverse(root) {
        if (set.has(k - root.val)) {
            flag = true;
        }
        set.add(root.val);
        
        if (root.left) traverse(root.left);
        if (root.right) traverse(root.right);
    }
    traverse(root)
    return flag;
};

// second pass solution using iterative DFT
var findTarget = function(root, k) {
    if (!root) return false;
    if (!root.left && !root.right) return false;
    
    let set = new Set();
    let stack = [root];
    
    while (stack.length) {
        let curr = stack.pop();
        
        if (set.has(k - curr.val)) return true;
        set.add(curr.val);
        
        if (curr.left) stack.push(curr.left);
        if (curr.right) stack.push(curr.right);
    }
    return false;
};
