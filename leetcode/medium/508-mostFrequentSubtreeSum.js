/*
Given the root of a tree, you are asked to find the most frequent subtree sum. The subtree sum of a node is defined as the sum of 
all the node values formed by the subtree rooted at that node (including the node itself). So what is the most frequent subtree sum value? 
If there is a tie, return all the values with the highest frequency in any order.

Examples 1
Input:

  5
 /  \
2   -3
return [2, -3, 4], since all the values happen only once, return all of them in any order.
Examples 2
Input:

  5
 /  \
2   -5
return [2], since 2 happens twice, however -5 only occur once.

*/

// first pass solution 
var findFrequentTreeSum = function(root) {
    if (!root) return [];
    
    let dict = {};
    let stack = [root];
    let max = 0;
    let output = [];
    
    while (stack.length) {
        let curr = stack.pop();
        let sum = dfs(curr);
        
        dict[sum] ? dict[sum] += 1 : dict[sum] = 1;
        max = Math.max(max, dict[sum]);
        
        if (curr.left) stack.push(curr.left);
        if (curr.right) stack.push(curr.right);
    }
    return Object.entries(dict).reduce((acc, arr) => {
        if (arr[1] === max) {
            acc.push(Number(arr[0]))
        } 
        return acc;
    }, [])
};

var dfs = function(root) {
    if (!root) return 0;
    if (!root.left && !root.right) return root.val;
    return dfs(root.left) + dfs(root.right) + root.val; 
}

// second pass solution
var findFrequentTreeSum = function(root) {
    if (!root) return [];
    
    let dict = {};
    let output = [];
    let max = [0];
    
    dfs(root, dict, max);

    return Object.entries(dict).reduce((acc, arr) => {
        if (arr[1] === max[0]) {
            acc.push(Number(arr[0]))
        } 
        return acc;
    }, [])
};

var dfs = function(root, dict, max) {
    if (!root) return 0;
    let sum = root.val + dfs(root.left, dict, max) + dfs(root.right, dict, max);
    dict[sum] ? dict[sum] += 1: dict[sum] = 1;
    max[0] = Math.max(max, dict[sum]);
    return sum;
}
