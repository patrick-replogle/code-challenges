// Given two non-empty binary trees s and t, check whether tree t has exactly the same structure and node values with a subtree of s. 
// A subtree of s is a tree consists of a node in s and all of this node's descendants. The tree s could also be considered as a subtree of itself.

// Example 1:
// Given tree s:

//      3
//     / \
//    4   5
//   / \
//  1   2
// Given tree t:
//    4 
//   / \
//  1   2
// Return true, because t has the same structure and node values with a subtree of s.
 
// Example 2:
// Given tree s:

//      3
//     / \
//    4   5
//   / \
//  1   2
//     /
//    0
// Given tree t:
//    4
//   / \
//  1   2
// Return false.

var isSubtree = function(s, t) {
    let queue = [s];
    
    while (queue.length > 0) {
        let currTree = queue.shift();
        
        if (isEqual(currTree, t)) return true;
        if (currTree.left) queue.push(currTree.left);
        if (currTree.right) queue.push(currTree.right);
    }
    return false;
}

var isEqual = function(left, right) {
    if (!left && !right) return true;
    if (!left || !right) return false;
    if (left.val !== right.val) return false;
    
    return isEqual(left.left, right.left) && isEqual(left.right, right.right);
}



