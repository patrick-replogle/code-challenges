// In English, we have a concept called root, which can be followed by some other word to form another longer word - let's call this word successor. For 
// example, when the root "an" is followed by the successor word "other", we can form a new word "another".

// Given a dictionary consisting of many roots and a sentence consisting of words separated by spaces, replace all the successors in the sentence with 
// the root forming it. If a successor can be replaced by more than one root, replace it with the root that has the shortest length.

// Return the sentence after the replacement.

// Example 1:

// Input: dictionary = ["cat","bat","rat"], sentence = "the cattle was rattled by the battery"
// Output: "the cat was rat by the bat"
// Example 2:

// Input: dictionary = ["a","b","c"], sentence = "aadsfasf absbs bbab cadsfafs"
// Output: "a a b c"
// Example 3:

// Input: dictionary = ["a", "aa", "aaa", "aaaa"], sentence = "a aa a aaaa aaa aaa aaa aaaaaa bbb baba ababa"
// Output: "a a a a a a a a bbb baba a"

// first pass solution
var replaceWords = function(dictionary, sentence) {
    let output = '';
    sentence = sentence.split(' ');
    
    for (let oldWord of sentence) {
        let newWord = '';
        for (let choice of dictionary) {
            if (oldWord.startsWith(choice)) {
                if (!newWord.length) newWord = choice; 
                else if (newWord.length > choice.length)  newWord = choice;
            }
        }
        if (newWord.length) output += newWord + " ";
        else output += oldWord + " ";
    }
    return output.trim();
};

// second pass solution
var replaceWords = function(dictionary, sentence) {
    let output = '';
    let set = new Set(dictionary);
    sentence = sentence.split(' ');
    
    for (let word of sentence) {
        let temp = '';
        for (let char of word) {
            temp += char;
            if (set.has(temp)) break;
        }
       output += temp + ' ';
    }
    return output.trim();
};
