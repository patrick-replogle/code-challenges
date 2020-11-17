// Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array 
// which gives the sum of zero.

// Notice that the solution set must not contain duplicate triplets.

// Example 1:

// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]
// Example 2:

// Input: nums = []
// Output: []
// Example 3:

// Input: nums = [0]
// Output: []

var threeSum = function(nums) {
    if(nums.length <= 2) return [];
  
    nums.sort((a, b) => a - b);
    
    let results = [];
    let set = new Set();
    
    for (let i = 0; i < nums.length - 2; i++) {
        let j = i + 1;
        let k = nums.length - 1;
        
        while (j < k) {
            let sum = nums[i] + nums[j] + nums[k];
        
            if (sum === 0) {
                if (!set.has(`${nums[i]}${nums[j]}${nums[k]}`)) {
                    results.push([nums[i], nums[j], nums[k]]);
                    set.add(`${nums[i]}${nums[j]}${nums[k]}`);
                    j++;
                    k--;
                } else {
                    j++;
                    k--;
                }
            } else if (sum > 0) {
                k--;
            } else if (sum < 0) {
                j++;
            }
        }
    }
    return results;
};
