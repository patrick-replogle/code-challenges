// We are given two sentences A and B.  (A sentence is a string of space separated words.  Each word consists only of lowercase letters.)

// A word is uncommon if it appears exactly once in one of the sentences, and does not appear in the other sentence.

// Return a list of all uncommon words. 

// You may return the list in any order.

// Example 1:
// Input: A = "this apple is sweet", B = "this apple is sour"
// Output: ["sweet","sour"]

// Example 2:
// Input: A = "apple apple", B = "banana"
// Output: ["banana"]

// first pass solution
var uncommonFromSentences = function(A, B) {
    let output = [];
    let dictA = {};
    let dictB = {};
    
    for (let word of A.split(' ')) {
        dictA[word] ? dictA[word] += 1 : dictA[word] = 1;
    }
    
    for (let word of B.split(' ')) {
        dictB[word] ? dictB[word] += 1 : dictB[word] = 1;
    }
    
    for (let word in dictA) {
        if (!(word in dictB) && dictA[word] === 1) {
            output.push(word);
        } 
    }
    
    for (let word in dictB) {
        if (!(word in dictA) && dictB[word] === 1) {
            output.push(word);
        } 
    }
    return output;
};

// second pass solution
var uncommonFromSentences = function(A, B) {
    let output = [];
    let dict = {};
    
    for (let word of A.split(' ')) {
        dict[word] ? dict[word] += 1 : dict[word] = 1;
    }
    
    for (let word of B.split(' ')) {
        dict[word] ? dict[word] += 1 : dict[word] = 1;
    }
    
    for (let word in dict) {
        if (dict[word] === 1) {
            output.push(word);
        }
    }
    return output;
};

// third pass 
var uncommonFromSentences = function(A, B) {
    let combinedArr = [...A.split(' '), ...B.split(' ')];
    let output = [];
    let dict = {};
    
    for (let word of combinedArr) {
        dict[word] ? dict[word] += 1 : dict[word] = 1;
    }
    
    for (let key in dict) {
        if (dict[key] === 1) {
            output.push(key);
        }
    }
    return output;
};
