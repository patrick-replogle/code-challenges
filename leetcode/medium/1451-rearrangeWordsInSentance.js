/*
Given a sentence text (A sentence is a string of space-separated words) in the following format:

First letter is in upper case.
Each word in text are separated by a single space.
Your task is to rearrange the words in text such that all words are rearranged in an increasing order of their lengths. If 
two words have the same length, arrange them in their original order.

Return the new text following the format shown above

Example 1:
Input: text = "Leetcode is cool"
Output: "Is cool leetcode"
Explanation: There are 3 words, "Leetcode" of length 8, "is" of length 2 and "cool" of length 4.
Output is ordered by length and the new first word starts with capital letter.
*/

// first pass solution
var arrangeWords = function(text) {
    let dict = {};
    let arr = text.split(' ');
    arr[0] = arr[0][0].toLowerCase() + arr[0].slice(1); 
    
    for (let i = 0; i < arr.length; i++) {
        if (!(arr[i].length in dict)) {
            dict[arr[i].length] = [];
        }
        dict[arr[i].length].push(arr[i]);
    }
    
    let output = Object.entries(dict)
        .sort((a, b) => Number(a[0]) - Number(b[0]))
        .map((arr, i) => arr[1].join(' '))
        .join(' ');
    
    return output[0].toUpperCase() + output.slice(1);
};

