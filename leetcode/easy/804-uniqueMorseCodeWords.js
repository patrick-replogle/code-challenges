// International Morse Code defines a standard encoding where each letter is mapped to a series of dots and dashes, as follows: "a" maps to ".-", "b" 
// maps to "-...", "c" maps to "-.-.", and so on.

// Now, given a list of words, each word can be written as a concatenation of the Morse code of each letter. For example, "cab" can be written as 
// "-.-..--...", (which is the concatenation "-.-." + ".-" + "-..."). We'll call such a concatenation, the transformation of a word.

// Return the number of different transformations among all words we have.

// Example:
// Input: words = ["gin", "zen", "gig", "msg"]
// Output: 2
// Explanation: 
// The transformation of each word is:
// "gin" -> "--...-."
// "zen" -> "--...-."
// "gig" -> "--...--."
// "msg" -> "--...--."

// There are 2 different transformations, "--...-." and "--...--.".

// first pass solution
var uniqueMorseRepresentations = function(words) {
    let transformations = new Set();
    let chars = [".-","-...","-.-.","-..",".","..-.","--.","....","..",
                 ".---","-.-",".-..","--","-.","---",".--.","--.-",".-.",
                 "...","-","..-","...-",".--","-..-","-.--","--.."]

    for (let word of words) {
        let curr = '';
        for (let char of word) {
            let index = char.charCodeAt(0) - 97;
            curr += chars[index];
        }
        transformations.add(curr);
    }
    
    return transformations.size;
};
