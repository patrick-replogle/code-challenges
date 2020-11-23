// Design a data structure that supports adding new words and finding if a string matches any previously added string.

// Implement the WordDictionary class:

// WordDictionary() Initializes the object.
// void addWord(word) Adds word to the data structure, it can be matched later.
// bool search(word) Returns true if there is any string in the data structure that matches word or false otherwise. word may contain dots '.' 
// where dots can be matched with any letter.
 
// Example:

// Input
// ["WordDictionary","addWord","addWord","addWord","search","search","search","search"]
// [[],["bad"],["dad"],["mad"],["pad"],["bad"],[".ad"],["b.."]]
// Output
// [null,null,null,null,false,true,true,true]

class WordDictionary {
    constructor() {
        this.dictionary = new Set();
        this.wordLengths = new Set();
    }
    
    addWord(word) {
        this.dictionary.add(word);
        this.wordLengths.add(word.length);
    }
    
    compareWords(word1, word2) {
        if (word1.length !== word2.length) return false;
        
        for (let i = 0; i < word1.length; i++) {
            if (word1[i] !== "." && word1[i] !== word2[i]) return false;
        }
        return true;
    }
    
    search(word) {   
        if (this.dictionary.has(word)) return true;
        if (!(this.wordLengths.has(word.length))) return false;

        for (let w of this.dictionary) {
            if (this.compareWords(word, w)) return true;
        }
        return false;
    }
}

