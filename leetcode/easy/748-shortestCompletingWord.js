// Given a string licensePlate and an array of strings words, find the shortest completing word in words.

// A completing word is a word that contains all the letters in licensePlate. Ignore numbers and spaces in licensePlate, and treat letters 
// as case insensitive. If a letter appears more than once in licensePlate, then it must appear in the word the same number of times or more.

// For example, if licensePlate = "aBc 12c", then it contains letters 'a', 'b' (ignoring case), and 'c' twice. Possible completing words are 
// "abccdef", "caaacab", and "cbca".

// Return the shortest completing word in words. It is guaranteed an answer exists. If there are multiple shortest completing words, return the 
// first one that occurs in words.

// Example 1:

// Input: licensePlate = "1s3 PSt", words = ["step","steps","stripe","stepple"]
// Output: "steps"
// Explanation: licensePlate contains letters 's', 'p', 's' (ignoring case), and 't'.
// "step" contains 't' and 'p', but only contains 1 's'.
// "steps" contains 't', 'p', and both 's' characters.
// "stripe" is missing an 's'.
// "stepple" is missing an 's'.
// Since "steps" is the only word containing all the letters, that is the answer.

// first pass solution
var shortestCompletingWord = function(licensePlate, words) {
    let licenseCount = {};
    let output = '';
    
    for (let char of licensePlate) {
        let curr = char.toLowerCase()
        if (/[a-z]/.test(curr)) {
            licenseCount[curr] ? licenseCount[curr] += 1 : licenseCount[curr] = 1;
        }
    }
    
    for (let word of words) {
        let dict = {};
        let flag = true;
        
        for (let char of word) {
            let curr = char.toLowerCase();
            if (curr in licenseCount) {
                dict[curr] ? dict[curr] += 1 : dict[curr] = 1;
            }
        }
        
        for (let key in licenseCount) {
            if (!(key in dict) || licenseCount[key] > dict[key]) {
                flag = false;
                break;
            }
        }
        if (flag) {
            if (output.length === 0) {
                output = word;
            } else if (output.length > word.length) {
                output = word;
            }
        }
    }
    return output;
};
