/*
Given a non-negative integer, you could swap two digits at most once to get the maximum valued number. Return the maximum valued number you could get.

Example 1:
Input: 2736
Output: 7236
Explanation: Swap the number 2 and the number 7.
Example 2:
Input: 9973
Output: 9973
Explanation: No swap.
*/

// first pass solution: brute force by checking all swaps and then reverting array back to normal after each check
var maximumSwap = function(num) {
    let max = num;
    let arr = String(num).split('');
    
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            [arr[i], arr[j]] = [arr[j], arr[i]]; // check all swaps
            max = Math.max(max, Number(arr.join('')));
            [arr[i], arr[j]] = [arr[j], arr[i]]; // then backtrack
        }
    }
    return max; // initial number is the largest permutation
};

// second pass solution: first num that is less than a number to the right of that index will be the one to be swapped
var maximumSwap = function(num) {
    let arr = String(num).split('');
    
    for (let i = 0; i < arr.length; i++) {
        let maxValIdx = i; 
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] > arr[maxValIdx]) maxValIdx = j; // we found a larger number
            else if (maxValIdx !== i && arr[j] === arr[maxValIdx]) maxValIdx = j; // make sure we swap with the most right idx of the larger number in case of duplicates
        }
        if (maxValIdx !== i) {
            [arr[i], arr[maxValIdx]] = [arr[maxValIdx], arr[i]];
            return Number(arr.join(''));
        }
    }
    return num; // initial number is the largest permutation
};
