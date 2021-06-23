// Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the 
// answer in any order.

// A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.

// Example 1:

// Input: digits = "23"
// Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
// Example 2:

// Input: digits = ""
// Output: []
// Example 3:

// Input: digits = "2"
// Output: ["a","b","c"]

// recursive solution
var letterCombinations = function(s) {
    if (s.length === 0) return [];
    
    let results = [];
    let dict = {
        2: ["a", "b", "c"],
        3: ["d", "e", "f"],
        4: ["g", "h", "i"],
        5: ["j", "k", "l"],
        6: ["m", "n", "o"],
        7: ["p", "q", "r", "s"],
        8: ["t", "u", "v"],
        9: ["w", "x", "y", "z"]
    }
    
    function recurse(path, index) {
        if (path.length === s.length) {
            return results.push(path);
        }
        
        for (let char of dict[s[index]]) {
            recurse(path + char, index + 1);
        }
    }
    
    recurse("", 0);
    return results;
};

// iterative solution
var letterCombinations = function(s) {
    if (s.length === 0) return [];
    
    let results = [];
    let dict = {
        2: ["a", "b", "c"],
        3: ["d", "e", "f"],
        4: ["g", "h", "i"],
        5: ["j", "k", "l"],
        6: ["m", "n", "o"],
        7: ["p", "q", "r", "s"],
        8: ["t", "u", "v"],
        9: ["w", "x", "y", "z"]
    }
    
    let stack = [["", 0]];
    
    while (stack.length > 0) {
        let [path, index] = stack.pop();
        
        if (path.length === s.length) {
            results.push(path);
            continue;
        }
        
        for (let char of dict[s[index]]) {
            stack.push([path + char, index + 1]);
        }
    }
    return results;
};
