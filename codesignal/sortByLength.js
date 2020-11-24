// Given an array of strings, sort them in the order of increasing lengths. If two strings have the same length, their 
// relative order must be the same as in the initial array.

// Example

// For

// inputArray = ["abc",
//               "",
//               "aaa",
//               "a",
//               "zz"]
// the output should be

// sortByLength(inputArray) = ["",
//                             "a",
//                             "zz",
//                             "abc",
//                             "aaa"]

// first pass solution using built in sort method
function sortByLength(inputArray) {
    return inputArray.sort((a, b) => a.length - b.length);
}

// second pass solution using insertion sort
function sortByLength(arr) {
    for (let i = 1; i < arr.length; i++) {
        let j = i;
        let currVal = arr[i];
        
        while (j > 0 && currVal.length < arr[j - 1].length) {
            arr[j] = arr[j-1];
            j--;
        }
        arr[j] = currVal;
    }
    return arr;
}
