// Given an array of strings, return another array containing all of its longest strings.

// Example

// For inputArray = ["aba", "aa", "ad", "vcd", "aba"], the output should be
// allLongestStrings(inputArray) = ["aba", "vcd", "aba"].

function allLongestStrings(inputArray) {
    inputArray = inputArray.sort((a, b) => b.length - a.length);
    let maxLen = inputArray[0].length;
    let result = [];
    
    for (let i = 0; i < inputArray.length; i++) {
        if (inputArray[i].length < maxLen) break;
        result.push(inputArray[i]);
    }
    return result;
}
