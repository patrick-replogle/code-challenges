/*
Function Description

Complete the weightedUniformStrings function in the editor below.

weightedUniformStrings has the following parameter(s):
- string s: a string
- int queries[n]: an array of integers

Returns
- string[n]: an array of strings that answer the queries

Input Format

The first line contains a string , the original string.
The second line contains an integer , the number of queries.
Each of the next  lines contains an integer , the weight of a uniform subtring of  that may or may not exist.
*/

// first pass solution
function weightedUniformStrings(s, queries) {
    let weights = new Set();
    let output = [];
    let i = 0;
    
    while (i < s.length) {
        let weight = s[i].charCodeAt(0) - 96;
        let currChar = s[i];
        weights.add(weight);
        
        while (i < s.length && s[i+1] === currChar) {
            i++;
            weight += s[i].charCodeAt(0) - 96;
            weights.add(weight);
        }
        i++;
    }

    for (let query of queries) {
        if (weights.has(query)) {
            output.push('Yes');
        } else {
            output.push('No');
        }
    }
    
    return output;
}
