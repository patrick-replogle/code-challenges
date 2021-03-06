/*
Given the array nums, for each nums[i] find out how many numbers in the array are smaller than it. That is, for each 
nums[i] you have to count the number of valid j's such that j != i and nums[j] < nums[i].

Return the answer in an array.

Example 1:
Input: nums = [8,1,2,2,3]
Output: [4,0,1,1,3]
Explanation: 
For nums[0]=8 there exist four smaller numbers than it (1, 2, 2 and 3). 
For nums[1]=1 does not exist any smaller number than it.
For nums[2]=2 there exist one smaller number than it (1). 
For nums[3]=2 there exist one smaller number than it (1). 
For nums[4]=3 there exist three smaller numbers than it (1, 2 and 2).
*/

// first pass solution using cache 
var smallerNumbersThanCurrent = function(nums) {
    let output = new Array(nums.length).fill(0);
    let cache = {};
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] in cache) {
            output[i] = cache[nums[i]];
        } else {
            let count = 0;
            for (let j = 0; j < nums.length; j++) {
                if (j !== i && nums[j] < nums[i]) {
                    count++;
                }
            }
            output[i] = count;
            cache[nums[i]] = count; 
        }
    }
    return output;
};

// second pass solution using sort and a hashmap
var smallerNumbersThanCurrent = function(nums) {
    let copy = [...nums].sort((a, b) => a - b);
    let dict = {};
    
    for (let i = 0; i < copy.length; i++) {
        if (!dict.hasOwnProperty(copy[i])) {
            dict[copy[i]] = i;
        }
     }
    return nums.map(num => dict[num]);
};
