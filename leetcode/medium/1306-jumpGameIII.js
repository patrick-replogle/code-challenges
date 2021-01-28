/*
Given an array of non-negative integers arr, you are initially positioned at start index of the array. When you are at index i, you 
can jump to i + arr[i] or i - arr[i], check if you can reach to any index with value 0.

Notice that you can not jump outside of the array at any time.

Example 1:
Input: arr = [4,2,3,0,3,1,2], start = 5
Output: true
Explanation: 
All possible ways to reach at index 3 with value 0 are: 
index 5 -> index 4 -> index 1 -> index 3 
index 5 -> index 6 -> index 4 -> index 1 -> index 3 

Example 2:
Input: arr = [4,2,3,0,3,1,2], start = 0
Output: true 
Explanation: 
One possible way to reach at index 3 with value 0 is: 
index 0 -> index 4 -> index 1 -> index 3

Example 3:
Input: arr = [3,0,2,1,2], start = 2
Output: false
Explanation: There is no way to reach at index 1 with value 0.
*/

// first pass solution using recursion
var canReach = function(arr, start) {
    let flag = false;
    let visited = new Set();
    
    function traverse(start, set) {
        if (arr[start] === 0) return flag = true;        
        if (set.has(start)) return;
        
        traverse(start + arr[start], set.add(start));
        traverse(start - arr[start], set.add(start));
    }
    
    traverse(start, visited);
    return flag;
};

// second pass iterative solution
var canReach = function(arr, start) {
    let visited = new Set();
    let stack = [start];
    
    while (stack.length) {
        let index = stack.pop();
        
        if (arr[index] === 0) return true;
        if (visited.has(index)) continue;
        
        visited.add(index);
        stack.push(index + arr[index]);
        stack.push(index - arr[index]);
    }
    return false;
};
