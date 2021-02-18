/*
Design a data structure that is initialized with a list of different words. Provided a string, you should determine if you can change exactly 
one character in this string to match any word in the data structure.

Implement the MagicDictionary class:

MagicDictionary() Initializes the object.
void buildDict(String[] dictionary) Sets the data structure with an array of distinct strings dictionary.
bool search(String searchWord) Returns true if you can change exactly one character in searchWord to match any string in the data structure, 
otherwise returns false.
 

Example 1:
Input
["MagicDictionary", "buildDict", "search", "search", "search", "search"]
[[], [["hello", "leetcode"]], ["hello"], ["hhllo"], ["hell"], ["leetcoded"]]
Output
[null, null, false, true, false, false]

Explanation
MagicDictionary magicDictionary = new MagicDictionary();
magicDictionary.buildDict(["hello", "leetcode"]);
magicDictionary.search("hello"); // return False
magicDictionary.search("hhllo"); // We can change the second 'h' to 'e' to match "hello" so we return True
magicDictionary.search("hell"); // return False
magicDictionary.search("leetcoded"); // return False
*/

// first pass solution
class MagicDictionary {
    constructor() {
        this.dict = {};
    }
    buildDict(dictionary) {
        for (let word of dictionary) {
            if (!(word.length in this.dict)) {
                this.dict[word.length] = [];
            }
            this.dict[word.length].push(word);
        }
    }
    search(word) {
        if (!(word.length in this.dict)) return false;
        
        for (let w of this.dict[word.length]) {
            let count = 0;
            for (let i = 0; i < w.length; i++) {
                if (w[i] !== word[i]) count++;
                if (count > 1) break;
            }
            if (count === 1) return true;
        }
        return false;
    }
}
