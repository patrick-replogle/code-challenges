// Given array of integers, find the maximal possible sum of some of its k consecutive elements.

// Example

// For inputArray = [2, 3, 5, 1, 6] and k = 2, the output should be
// arrayMaxConsecutiveSum(inputArray, k) = 8.
// All possible sums of 2 consecutive elements are:

// 2 + 3 = 5;
// 3 + 5 = 8;
// 5 + 1 = 6;
// 1 + 6 = 7.
// Thus, the answer is 8.

function arrayMaxConsecutiveSum(inputArray, k) {
    let max = inputArray.slice(0, k).reduce((a, b) => a + b);
    let curr = max;
    let j = 0;
    
    for (let i = k; i < inputArray.length; i++) {
        curr = curr + inputArray[i] - inputArray[j];
        max = Math.max(curr, max);
        j++;
    }
    return max;
}
