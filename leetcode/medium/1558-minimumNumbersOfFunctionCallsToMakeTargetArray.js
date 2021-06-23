/*
Your task is to form an integer array nums from an initial array of zeros arr that is the same size as nums.

Return the minimum number of function calls to make nums from arr.

The answer is guaranteed to fit in a 32-bit signed integer.

Example 1:
Input: nums = [1,5]
Output: 5
Explanation: Increment by 1 (second element): [0, 0] to get [0, 1] (1 operation).
Double all the elements: [0, 1] -> [0, 2] -> [0, 4] (2 operations).
Increment by 1 (both elements)  [0, 4] -> [1, 4] -> [1, 5] (2 operations).
Total of operations: 1 + 2 + 2 = 5.
*/

// first pass iterative solution
var minOperations = function(nums) {
    let output = 0;

    while (true) {      
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] % 2 !== 0) {
                nums[i]--;
                output++;
            }
        }
        if (nums.reduce((acc, el) => acc + el) === 0) {
            return output;
        } else {
            for (let i = 0; i < nums.length; i++) {
                if (nums[i] % 2 === 0) nums[i] /= 2;
            }  
            output++;
        }
    }
};

// second pass recursive solution
var minOperations = function(nums) {
    let output = 0;

    function recurse(sum) {
        if (sum === 0) return;
        
        nums.forEach((num, i) => {
            if (num % 2 !== 0) {
                nums[i]--;
                output++;
            }
        });
        
        let flag = true;
        nums.forEach((num, i) => {
            if (nums[i] % 2 === 0 && nums[i] > 0) {
                nums[i] /= 2;
                flag = false;
            }
        })
        if (!flag) output++;
        recurse(nums.reduce((acc, el) => acc + el));
    }
    
    recurse(nums.reduce((acc, el) => acc + el));
    return output;
};
