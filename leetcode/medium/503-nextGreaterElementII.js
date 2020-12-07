// Given a circular array (the next element of the last element is the first element of the array), print the Next Greater Number for every 
// element. The Next Greater Number of a number x is the first greater number to its traversing-order next in the array, which means you could 
// search circularly to find its next greater number. If it doesn't exist, output -1 for this number.

// Example 1:
// Input: [1,2,1]
// Output: [2,-1,2]
// Explanation: The first 1's next greater number is 2; 
// The number 2 can't find next greater number; 
// The second 1's next greater number needs to search circularly, which is also 2.

// first pass solution => double the array and use nested loop to search for next greatest element
var nextGreaterElements = function(nums) {
    let len = nums.length;
    let output = [];
    let i = 0;
    nums = nums.concat(nums);
    
    for (let i = 0; i < len; i++) {
        let curr = nums[i];
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[j] > curr) {
                output.push(nums[j]);
                break;
            }
        }
        if (output.length !== i + 1) output.push(-1)
    }
    return output;
};

// second pass solution => same logic, but using a second variable and recalulating the index instead of double array size
var nextGreaterElements = function(nums) {
    let len = nums.length;
    let output = [];
    let i = 0;
    
    for (let i = 0; i < len; i++) {
        let curr = nums[i];
        
        for (let j = i + 1; j < len * 2; j++) {
            let k = j;
            
            if (j >= len) k = j - len;
            
            if (nums[k] > curr) {
                output.push(nums[k]);
                break;
            }
        }
        if (output.length !== i + 1) output.push(-1)
    }
    return output;
};
