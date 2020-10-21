// Given array of integers, remove each kth element from it.

// Example

// For inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] and k = 3, the output should be
// extractEachKth(inputArray, k) = [1, 2, 4, 5, 7, 8, 10].

function extractEachKth(inputArray, k) {
    let i = 0;
    let j = 1;
    
    while(i < inputArray.length) {
        if(j === k) {
            inputArray = inputArray.slice(0, i).concat(inputArray.slice(i + 1));
            j = 1;
        } else {
            j++;
            i++;
        }
    }
    return inputArray;
}
