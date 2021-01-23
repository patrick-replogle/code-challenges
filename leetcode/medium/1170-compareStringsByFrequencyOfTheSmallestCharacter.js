// Let the function f(s) be the frequency of the lexicographically smallest character in a non-empty string s. For example, if s = "dcce" 
// then f(s) = 2 because the lexicographically smallest character is 'c', which has a frequency of 2.

// You are given an array of strings words and another array of query strings queries. For each query queries[i], count the number of words in words 
// such that f(queries[i]) < f(W) for each W in words.

// Return an integer array answer, where each answer[i] is the answer to the ith query.

// Example 1:
// Input: queries = ["cbd"], words = ["zaaaz"]
// Output: [1]
// Explanation: On the first query we have f("cbd") = 1, f("zaaaz") = 3 so f("cbd") < f("zaaaz").

// Example 2:
// Input: queries = ["bbb","cc"], words = ["a","aa","aaa","aaaa"]
// Output: [1,2]
// Explanation: On the first query only f("bbb") < f("aaaa"). On the second query both f("aaa") and f("aaaa") are both > f("cc").

// first pass solution
var numSmallerByFrequency = function(queries, words) {
    let output = [];
    
    for (let i = 0; i < queries.length; i++) {
        let q = queries[i].split('').sort();
        while (q[q.length - 1] !== q[0]) {
            q.pop();
        }
        queries[i] = q.join('');
    }
    
    for (let i = 0; i < words.length; i++) {
        let w = words[i].split('').sort();
        while (w[w.length - 1] !== w[0]) {
            w.pop();
        }
        words[i] = w.join('');
    }

    for (let q of queries) {
        let curr = 0;
        for (let w of words) {
            if (q.length < w.length) {
                curr++;
            }
        }
        output.push(curr);
    }
    return output;
};

// second pass solution => similar to the first, but using dictionaries instead of splitting and sorting strings
var numSmallerByFrequency = function(queries, words) {
    let output = [];
    
    for (let i = 0; i < queries.length; i++) {
        let minChar = 'z';
        let dict = {};
        for (let char of queries[i]) {
            dict[char] ? dict[char] += 1 : dict[char] = 1;
            if (char.charCodeAt(0) < minChar.charCodeAt(0)) {
                minChar = char;
            }
        }
        queries[i] = dict[minChar];
    }
    
    for (let i = 0; i < words.length; i++) {
        let minChar = 'z';
        let dict = {};
        for (let char of words[i]) {
            dict[char] ? dict[char] += 1 : dict[char] = 1;
            if (char.charCodeAt(0) < minChar.charCodeAt(0)) {
                minChar = char;
            }
        }
        words[i] = dict[minChar];
    }
    
    for (let q of queries) {
        let curr = 0;
        for (let w of words) {
            if (q < w) {
                curr++;
            }
        }
        output.push(curr);
    }
    return output;
};
