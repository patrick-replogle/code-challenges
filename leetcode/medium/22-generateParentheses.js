// Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

// Example 1:

// Input: n = 3
// Output: ["((()))","(()())","(())()","()(())","()()()"]
// Example 2:

// Input: n = 1
// Output: ["()"]

// recursive solution
var generateParenthesis = function(n) {
    let results = [];
    
    function helper(open, closed, path) {
        if (open === 0 && closed === 0) {
            results.push(path);
        } 
        
        if (open > 0) {
            helper(open - 1, closed, path + "(");
        } 
        
        if (closed > 0 && opens < closed) {
            helper(open, closed - 1, path + ")");
        }
    }
    helper(n, n, "");
    return results;
};

// iterative solution
var generateParenthesis = function(n) {
    let results = [];
    let queue = [[n, n, ""]];
    
    while (queue.length > 0) {
        let [open, closed, path] = queue.shift();
        
        if (open === 0 && closed === 0) {
            results.push(path);
        }
        
        if (open > 0) {
            queue.push([open - 1, closed, path + "("]);
        }
        
        if (closed > 0 && open < closed) {
            queue.push([open, closed - 1, path + ")"]);
        }
    }
    return results;
};
