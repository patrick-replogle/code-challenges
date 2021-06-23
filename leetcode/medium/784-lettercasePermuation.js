// Given a string S, we can transform every letter individually to be lowercase or uppercase to create another string.

// Return a list of all possible strings we could create. You can return the output in any order.

// Example 1:

// Input: S = "a1b2"
// Output: ["a1b2","a1B2","A1b2","A1B2"]
// Example 2:

// Input: S = "3z4"
// Output: ["3z4","3Z4"]
// Example 3:

// Input: S = "12345"
// Output: ["12345"]
// Example 4:

// Input: S = "0"
// Output: ["0"]

// recursive solution
var letterCasePermutation = function(s) {
    let results = [];
    let regex = /[a-zA-Z]/;
    
    function permute(path, index) {
        if (path.length === s.length) {
            return results.push(path);
        }
        
        if (regex.test(s[index])) {
            permute(path + s[index].toLowerCase(), index + 1);
            permute(path + s[index].toUpperCase(), index + 1);
        } else {
            permute(path + s[index], index + 1);
        }
    }
    
    permute("", 0);
    return results;
};

// iterative solution
var letterCasePermutation = function(s) {
    let results = [];
    let regex = /[a-zA-Z]/;
    let queue = [["", 0]];
    
    while (queue.length > 0) {
        let [path, index] = queue.shift();
        
        if (path.length === s.length) {
            results.push(path);
            continue;
        }
        
        if (regex.test(s[index])) {
            queue.push([path + s[index].toLowerCase(), index + 1]);
            queue.push([path + s[index].toUpperCase(), index + 1])
        } else {
            queue.push([path + s[index], index + 1]);
        }
    }
    return results;
};
