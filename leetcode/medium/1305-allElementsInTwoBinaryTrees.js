/*
Given two binary search trees root1 and root2.

Return a list containing all the integers from both trees sorted in ascending order.

Example 1:
Input: root1 = [2,1,4], root2 = [1,0,3]
Output: [0,1,1,2,3,4]

Example 2:
Input: root1 = [0,-10,10], root2 = [5,1,7,0,2]
Output: [-10,0,0,1,2,5,7,10]

Example 3:
Input: root1 = [], root2 = [5,1,7,0,2]
Output: [0,1,2,5,7]
*/

// first pass solution using inorder traversal
var getAllElements = function(root1, root2) {
    let values = [];
    
    function inorder(root) {
        if (!root) return;
        if (root.left) inorder(root.left);
        values.push(root.val);
        if (root.right) inorder(root.right);
    }
    inorder(root1);
    inorder(root2);
    
    return values.sort((a, b) => a - b);
};

// second pass solution 
var getAllElements = function(root1, root2) {
    let values1 = [];
    let values2 = [];
    let result = [];
    let i = 0;
    let j = 0;
    
    function inorder(root, arr) {
        if (!root) return;
        if (root.left) inorder(root.left, arr);
        arr.push(root.val);
        if (root.right) inorder(root.right, arr);
    }
    
    inorder(root1, values1);
    inorder(root2, values2);
    
    while (i < values1.length && j < values2.length) {
        if (values1[i] < values2[j]) {
            result.push(values1[i]);
            i++;
        } else {
            result.push(values2[j]);
            j++;
        }
    }
    
    while (i < values1.length) {
        result.push(values1[i]);
        i++; 
    }
    
    while (j < values2.length) {
        result.push(values2[j]);
        j++; 
    }
    
    return result;
};
