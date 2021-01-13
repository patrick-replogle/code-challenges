// A sentence S is given, composed of words separated by spaces. Each word consists of lowercase and uppercase letters only.

// We would like to convert the sentence to "Goat Latin" (a made-up language similar to Pig Latin.)

// The rules of Goat Latin are as follows:

// If a word begins with a vowel (a, e, i, o, or u), append "ma" to the end of the word.
// For example, the word 'apple' becomes 'applema'.
 
// If a word begins with a consonant (i.e. not a vowel), remove the first letter and append it to the end, then add "ma".
// For example, the word "goat" becomes "oatgma".
 
// Add one letter 'a' to the end of each word per its word index in the sentence, starting with 1.
// For example, the first word gets "a" added to the end, the second word gets "aa" added to the end and so on.
// Return the final sentence representing the conversion from S to Goat Latin. 

// Example 1:
// Input: "I speak Goat Latin"
// Output: "Imaa peaksmaaa oatGmaaaa atinLmaaaaa"

// first pass solution
var toGoatLatin = function(S) {
    let vowels = new Set(['A', 'E', 'I', 'O', 'U', 'a', 'e', 'i', 'o', 'u'])
    S = S.split(' ');
    
    for (let i = 0; i < S.length; i++) {
        let word = S[i];
        
        if (vowels.has(word[0])) {
            word += 'ma';
        } else if (!vowels.has(word[0])) {
            word = word.slice(1) + word[0] + 'ma';
        } 
        word += 'a'.repeat(i + 1);
        S[i] = word;
    }
    return S.join(' ');
};
