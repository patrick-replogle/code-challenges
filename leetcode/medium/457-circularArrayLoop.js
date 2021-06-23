/*
You are given a circular array nums of positive and negative integers. If a number k at an index is positive, then move forward k steps. 
Conversely, if it's negative (-k), move backward k steps. Since the array is circular, you may assume that the last element's next element 
is the first element, and the first element's previous element is the last element.

Determine if there is a loop (or a cycle) in nums. A cycle must start and end at the same index and the cycle's length > 1. Furthermore, 
movements in a cycle must all follow a single direction. In other words, a cycle must not consist of both forward and backward movements.

Example 1:
Input: [2,-1,1,2,2]
Output: true
Explanation: There is a cycle, from index 0 -> 2 -> 3 -> 0. The cycle's length is 3.
Example 2:

Input: [-1,2]
Output: false
Explanation: The movement from index 1 -> 1 -> 1 ... is not a cycle, because the cycle's length is 1. By definition the cycle's length 
must be greater than 1.
Example 3:

Input: [-2,1,-1,-2,-2]
Output: false
Explanation: The movement from index 1 -> 2 -> 1 -> ... is not a cycle, because movement from index 1 -> 2 is a forward movement, but 
movement from index 2 -> 1 is a backward movement. All movements in a cycle must follow a single direction.
*/

// first pass solution => brute force
var circularArrayLoop = function(nums) {
    for (let i = 0; i < nums.length; i++) {
        let forward = false;
        let backward = false;
        let path = new Set();
        let j = i;
        
        while (true) { 
            if (path.has(j)) {
                if (path.size > 1 && j === i) return true;
                else break;
            } 
            if (nums[j] > 0) forward = true;
            else backward = true;
            if (forward && backward) break;
            
            path.add(j);
            j = calulateNextPosition(nums, j);
        }
    }
    return false;
};

var calulateNextPosition = function(nums, j) {
    let count = Math.abs(nums[j]);
    
    if (j + nums[j] < 0) {
        while (count > 0) {
            j--;
            count--;
            if (j < 0) j = nums.length - 1;
        }
    } 
    else if (j + nums[j] > nums.length - 1) {
        while (count > 0) {
            j++;
            count--;
            if (j > nums.length - 1) j = 0;
        }
    } 
    else {
        j += nums[j];
    }
    return j;
}

// second pass solution
var circularArrayLoop = function(nums) {
    for (let i = 0; i < nums.length; i++) {
        let forward = false;
        let backward = false;
        let path = new Set();
        let j = i;
        
        while (true) { 
            if (path.has(j)) {
                if (path.size > 1 && j === i) return true;
                else break;
            } 
            if (nums[j] > 0) forward = true;
            else backward = true;
            if (forward && backward) break;
            
            path.add(j);
            j += nums[j];
            j %= nums.length;
            if (j < 0) j += nums.length;
            else if (j > nums.length - 1) j -= nums.length;
        }
    }
    return false;
};


