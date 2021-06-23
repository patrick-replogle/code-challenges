/*
Given an array target and an integer n. In each iteration, you will read a number from  list = {1,2,3..., n}.

Build the target array using the following operations:

Push: Read a new element from the beginning list, and push it in the array.
Pop: delete the last element of the array.
If the target array is already built, stop reading more elements.
Return the operations to build the target array. You are guaranteed that the answer is unique.

Example 1:
Input: target = [1,3], n = 3
Output: ["Push","Push","Pop","Push"]
Explanation: 
Read number 1 and automatically push in the array -> [1]
Read number 2 and automatically push in the array then Pop it -> [1]
Read number 3 and automatically push in the array -> [1,3]
*/

// first pass solution
var buildArray = function(target, n) {
    let output = [];
    let j = 0;
    
    for (let i = 1; i <= target[target.length - 1]; i++) {
        if (i === target[j]) {
            output.push('Push');
            j++;
        } else {
            output.push('Push', 'Pop');
        }
    }
    return output;
};
