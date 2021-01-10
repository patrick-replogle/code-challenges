// Given a non-empty list of words, return the k most frequent elements.

// Your answer should be sorted by frequency from highest to lowest. If two words have the same frequency, then the word with the lower 
// alphabetical order comes first.

// Example 1:
// Input: ["i", "love", "leetcode", "i", "love", "coding"], k = 2
// Output: ["i", "love"]
// Explanation: "i" and "love" are the two most frequent words.
//     Note that "i" comes before "love" due to a lower alphabetical order.

// Example 2:
// Input: ["the", "day", "is", "sunny", "the", "the", "the", "sunny", "is", "is"], k = 4
// Output: ["the", "is", "sunny", "day"]
// Explanation: "the", "is", "sunny" and "day" are the four most frequent words,
//     with the number of occurrence being 4, 3, 2 and 1 respectively.

// first pass solution
var topKFrequent = function(words, k) {
    let wordCount = {};
    
    for (let word of words) {
        if (!(word in wordCount)) {
            wordCount[word] = 0;
        }
        wordCount[word] += 1;
    }
    
    let output = [];
    let entries = Object.entries(wordCount)
        .sort((a, b) => b[1] !== a[1] ? 
              b[1] - a[1] : a[0].localeCompare(b[0]) - b[0].localeCompare(a[0]));
    
    for (let [x, y] of entries.slice(0, k)) {
        output.push(x);
    }
    return output;
 };
