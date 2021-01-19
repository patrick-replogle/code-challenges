// Given an array A of strings made only from lowercase letters, return a list of all characters that show up in all strings within the list 
// (including duplicates).  For example, if a character occurs 3 times in all strings but not 4 times, you need to include that character three 
// times in the final answer.

// You may return the answer in any order.

// Example 1:
// Input: ["bella","label","roller"]
// Output: ["e","l","l"]

// Example 2:
// Input: ["cool","lock","cook"]
// Output: ["c","o"]

// first pass solution
var commonChars = function(A) {
    let output = [];
    let dict1 = {};
    
    for (let char of A[0]) {
        dict1[char] ? dict1[char] += 1 : dict1[char] = 1;
    }
    
    for (let i = 1; i < A.length; i++) {
        let word = A[i];
        let dict2 = {};
        
        for (let char of word) {
           dict2[char] ? dict2[char] += 1 : dict2[char] = 1; 
        }
        
        for (let char in dict1) {
            if (!(char in dict2)) delete dict1[char];
            if (dict2[char] < dict1[char]) dict1[char] = dict2[char];
        }
    }
    
    for (let char in dict1) {
        for (let i = 0; i < dict1[char]; i++) {
            output.push(char);
        }
    }
    return output;
};

// second pass solution
var commonChars = function(A) {
    let firstWord = A[0];
    
    for (let i = 0; i < A.length; i++) {
        let currWord = A[i];
        
        for (let char of firstWord) {
            let index = currWord.indexOf(char)
            if (index === -1) {
                firstWord = firstWord.replace(char, '');
            } else {
                currWord = currWord.slice(0, index) + currWord.slice(index + 1);
            }
        }
    }
    return firstWord.split('');
};
