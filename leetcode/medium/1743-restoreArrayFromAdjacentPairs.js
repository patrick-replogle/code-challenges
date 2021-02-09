/*
There is an integer array nums that consists of n unique elements, but you have forgotten it. However, you do remember every 
pair of adjacent elements in nums.

You are given a 2D integer array adjacentPairs of size n - 1 where each adjacentPairs[i] = [ui, vi] indicates that the elements 
ui and vi are adjacent in nums.

It is guaranteed that every adjacent pair of elements nums[i] and nums[i+1] will exist in adjacentPairs, either as [nums[i], 
nums[i+1]] or [nums[i+1], nums[i]]. The pairs can appear in any order.

Return the original array nums. If there are multiple solutions, return any of them.

Example 1:
Input: adjacentPairs = [[2,1],[3,4],[3,2]]
Output: [1,2,3,4]
Explanation: This array has all its adjacent pairs in adjacentPairs.
Notice that adjacentPairs[i] may not be in left-to-right order.

Example 2:
Input: adjacentPairs = [[4,-2],[1,4],[-3,1]]
Output: [-2,4,1,-3]
Explanation: There can be negative numbers.
Another solution is [-3,1,4,-2], which would also be accepted.
*/

// first pass solution
var restoreArray = function(pairs) {
    let graph = new Set();
    let start = null;
    
    for (let pair of pairs) {
        if (!(graph[pair[0]])) graph[pair[0]] = new Set();
        if (!(graph[pair[1]])) graph[pair[1]] = new Set();
        graph[pair[0]].add(pair[1]);
        graph[pair[1]].add(pair[0]);
    }
    
    for (let key in graph) {
        if (graph[key].size === 1) {
            start = Number(key);
            break;
        } 
    }
    return dfs(start, graph);
};

var dfs = function(start, graph) {
    let stack = [start];
    let visited = new Set();
    let output = [];
    
    while (stack.length) {
        let currVal = stack.pop();   
        visited.add(currVal);
        output.push(currVal);

        for (let neighbor of graph[currVal]) {
            if (!visited.has(neighbor)) {
                stack.push(neighbor);
            }
        }
    }
    return output;
}

