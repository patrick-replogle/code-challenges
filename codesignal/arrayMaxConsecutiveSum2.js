/*
Given an array of integers, find the maximum possible sum you can get from one of its contiguous subarrays. The subarray from which this 
sum comes must contain at least 1 element.

Example

For inputArray = [-2, 2, 5, -11, 6], the output should be
arrayMaxConsecutiveSum2(inputArray) = 7.

The contiguous subarray that gives the maximum possible sum is [2, 5], with a sum of 7.
*/

// first pass solution
function arrayMaxConsecutiveSum2(inputArray) {
    let max = -Infinity;
    
    for (let i = 0; i < inputArray.length; i++) {
        let currSum = inputArray[i];
        max = Math.max(max, currSum);
        for (let j = i + 1; j < inputArray.length; j++) {
            currSum += inputArray[j];
            max = Math.max(max, currSum);
        }
    }
    return max;
}

// second pass solution
function arrayMaxConsecutiveSum2(inputArray) {
    let finalMax = inputArray[0];
    let currMax = inputArray[0];
    
    for (let i = 1; i < inputArray.length; i++) {
        currMax = Math.max(inputArray[i], currMax + inputArray[i]);
        finalMax = Math.max(currMax, finalMax);
        
    }
    return finalMax;
}
