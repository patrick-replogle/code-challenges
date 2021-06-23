// Given an integer array, your task is to find all the different possible increasing subsequences of the given array, and the length 
// of an increasing subsequence should be at least 2.

// Example:

// Input: [4, 6, 7, 7]
// Output: [[4, 6], [4, 7], [4, 6, 7], [4, 6, 7, 7], [6, 7], [6, 7, 7], [7,7], [4,7,7]]

// first pass solution using recursion find all possible increasing subsequences
var findSubsequences = function(nums) {
    let subs = [];
    let visited = new Set();
    
    function recurse(path, idx) {
        if (path.length > 1) subs.push(path);
        if (idx >= nums.length) return;
       
        let visited = new Set();
        
        for (let i = idx; i < nums.length; i++) {
            if (!visited.has(nums[i]) && nums[i] >= path[path.length - 1]) {
                visited.add(nums[i]);
                recurse([...path, nums[i]], i + 1);
            }
        }
    }
    
    for (let i = 0; i < nums.length; i++) {
        if (!visited.has(nums[i])) {
            visited.add(nums[i]);
            recurse([nums[i]], i + 1);
        }
    }
    return subs;
};
