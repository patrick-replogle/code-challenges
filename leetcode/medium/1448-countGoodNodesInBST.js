/*
Given a binary tree root, a node X in the tree is named good if in the path from root to X there are no nodes with a value greater than X.

Return the number of good nodes in the binary tree.

Example 1:
Input: root = [3,1,4,3,null,1,5]
Output: 4
Explanation: Nodes in blue are good.
Root Node (3) is always a good node.
Node 4 -> (3,4) is the maximum value in the path starting from the root.
Node 5 -> (3,4,5) is the maximum value in the path
Node 3 -> (3,1,3) is the maximum value in the path.
*/

// first pass iterative solution
var goodNodes = function(root) {
    let stack = [[root, root.val]];
    let output = 0;
    
    while (stack.length) {
        let [currNode, maxVal] = stack.pop();
        
        if (maxVal === currNode.val) {
           output++; 
        }
        if (currNode.left) {
         stack.push([currNode.left, Math.max(maxVal, currNode.left.val)]);   
        } 
        if (currNode.right) {
          stack.push([currNode.right, Math.max(maxVal, currNode.right.val)]);  
        } 
    }
    return output;
};

// second pass recursive solution
var goodNodes = function(root) {
    let output = 0;
    
    function DFT(currNode, maxVal) {      
        if (maxVal === currNode.val) output++; 
        if (currNode.left) DFT(currNode.left, Math.max(maxVal, currNode.left.val));   
        if (currNode.right) DFT(currNode.right, Math.max(maxVal, currNode.right.val));  
    }
    DFT(root, root.val)
    return output;
};
