/*
Design the CombinationIterator class:

CombinationIterator(string characters, int combinationLength) Initializes the object with a string characters of sorted distinct lowercase English 
letters and a number combinationLength as arguments.
next() Returns the next combination of length combinationLength in lexicographical order.
hasNext() Returns true if and only if there exists a next combination.
 
Example 1:
Input
["CombinationIterator", "next", "hasNext", "next", "hasNext", "next", "hasNext"]
[["abc", 2], [], [], [], [], [], []]
Output
[null, "ab", true, "ac", true, "bc", false]

Explanation
CombinationIterator itr = new CombinationIterator("abc", 2);
itr.next();    // return "ab"
itr.hasNext(); // return True
itr.next();    // return "ac"
itr.hasNext(); // return True
itr.next();    // return "bc"
itr.hasNext(); // return False
*/

// first pass solution
class CombinationIterator {
    constructor(characters, combinationLength) {
        this.characters = characters;
        this.length = combinationLength;
        this.stack = [];
        this.generateCombos();
    }
    generateCombos() {
        const recurse = (path, index, k) => {
            if (k === 0) {
                return this.stack.push(path);
            }

            for (let i = index; i < this.characters.length; i++) {
                recurse(path + this.characters[i], i + 1, k - 1); 
            }
        }
        recurse('', 0, this.length);
        this.stack.reverse();
    }
    next() {
        return this.stack.pop();
    }
    hasNext() {
        return this.stack.length !== 0;
    }
}
