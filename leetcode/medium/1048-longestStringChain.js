// Given a list of words, each word consists of English lowercase letters.

// Let's say word1 is a predecessor of word2 if and only if we can add exactly one letter anywhere in word1 to make it equal to word2.  
// For example, "abc" is a predecessor of "abac".

// A word chain is a sequence of words [word_1, word_2, ..., word_k] with k >= 1, where word_1 is a predecessor of word_2, word_2 is a 
// predecessor of word_3, and so on.

// Return the longest possible length of a word chain with words chosen from the given list of words.

// Example 1:
// Input: words = ["a","b","ba","bca","bda","bdca"]
// Output: 4
// Explanation: One of the longest word chain is "a","ba","bda","bdca".

var longestStrChain = function(words) {
    words.sort((a, b) => a.length - b.length);
    let dict = {};

    for (let word of words) {
        let currCount = 1;
        for (let i = 0; i < word.length; i++) {
            let slicedWord = word.slice(0, i) + word.slice(i + 1);
            if (slicedWord in dict) {
                currCount = Math.max(currCount, dict[slicedWord] + 1);
            }
            dict[word] = currCount;
        }
    }
    return Math.max(...Object.values(dict));
};
