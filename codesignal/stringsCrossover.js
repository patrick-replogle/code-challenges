// Define crossover operation over two equal-length strings A and B as follows:

// the result of that operation is a string of the same length as the input strings
// result[i] is either A[i] or B[i], chosen at random
// Given array of strings inputArray and a string result, find for how many pairs of strings from inputArray the result of the 
// crossover operation over them may be equal to result.

// Note that (A, B) and (B, A) are the same pair. Also note that the pair cannot include the same element of the array twice 
// (however, if there are two equal elements in the array, they can form a pair).

// Example

// For inputArray = ["abc", "aaa", "aba", "bab"] and result = "bbb", the output should be
// stringsCrossover(inputArray, result) = 2.

function stringsCrossover(arr, str) {
    let result = 0;
    
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            let flag = true;
            for (let k = 0; k < arr[i].length; k++) {
                if (arr[i][k] !== str[k] && arr[j][k] !== str[k]) {
                    flag = false;
                    break;
                }
            }
            if (flag) result++;
        }
    }
    return result;
}
