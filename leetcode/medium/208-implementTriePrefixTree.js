// Implement a trie with insert, search, and startsWith methods.

// Example:

// Trie trie = new Trie();

// trie.insert("apple");
// trie.search("apple");   // returns true
// trie.search("app");     // returns false
// trie.startsWith("app"); // returns true
// trie.insert("app");   
// trie.search("app");     // returns true

// first pass solution using an ES6 class and set for data storage
class Trie {
    constructor() {
        this.trie = new Set();
    }
    
    insert(word) {
        if (!(this.trie.has(word))) {
            this.trie.add(word);
        }
    }
    
    search(word) {
        if (this.trie.has(word)) {
            return true;
        }
        return false;
    }
    
    startsWith(prefix) {
        for (let word of this.trie) {
            if (word.startsWith(prefix)) {
                return true;
            }
        }
        return false;
    }
}

