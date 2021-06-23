// You are given an array of strings words and a string chars.

// A string is good if it can be formed by characters from chars (each character can only be used once).

// Return the sum of lengths of all good strings in words.

// Example 1:
// Input: words = ["cat","bt","hat","tree"], chars = "atach"
// Output: 6
// Explanation: 
// The strings that can be formed are "cat" and "hat" so the answer is 3 + 3 = 6.

// Example 2:
// Input: words = ["hello","world","leetcode"], chars = "welldonehoneyr"
// Output: 10
// Explanation: 
// The strings that can be formed are "hello" and "world" so the answer is 5 + 5 = 10.

// first pass solution
var countCharacters = function(words, chars) {
    let lengthSum = 0;
    
    for (let word of words) {
        let copy = chars;
        let flag = true;
        for (let char of word) {
            if (!copy.includes(char)) {
                flag = false;
                break;
            }
            copy = copy.replace(char, '');
        }
        if (flag) {
            lengthSum += word.length;
        }
    }
    return lengthSum;
};

// second pass solution
var countCharacters = function(words, chars) {
    let lengthSum = 0;
    let flag = true;
    
    for (let word of words) {
        flag = true;
        for (let char of word) {
            let charCountInChars = (chars.match(new RegExp(char, 'g')) || []).length;
            let charCountInWord = (word.match(new RegExp(char, 'g')) || []).length;
            if (charCountInChars < charCountInWord) {
                flag = false;
                break;
            }
        }
        if (flag) {
            lengthSum += word.length;
        }
    }
    return lengthSum;
};
