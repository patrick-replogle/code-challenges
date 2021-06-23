/*
Given an n-ary tree, return the level order traversal of its nodes' values.

Nary-Tree input serialization is represented in their level order traversal, each group of children is separated by the null value (See examples).

Example 1:
Input: root = [1,null,3,2,4,null,5,6]
Output: [[1],[3,2,4],[5,6]]
*/

// first pass solution
var levelOrder = function(root) {
    if (!root) return [];
    
    let values = [];
    let queue = [root];
    
    while (queue.length) {
        let len = queue.length;
        let currLevel = [];
        
        for (let i = 0; i < len; i++) {
            let curr = queue.shift();
            currLevel.push(curr.val);
            
            for (let child of curr.children) {
                queue.push(child);
            }
        }
        values.push(currLevel);
    }
    return values;
};
