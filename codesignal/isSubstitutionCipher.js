// A ciphertext alphabet is obtained from the plaintext alphabet by means of rearranging some characters. For example "bacdef...xyz" will be a 
// simple ciphertext alphabet where a and b are rearranged.

// A substitution cipher is a method of encoding where each letter of the plaintext alphabet is replaced with the corresponding (i.e. having the 
// same index) letter of some ciphertext alphabet.

// Given two strings, check whether it is possible to obtain them from each other using some (possibly, different) substitution ciphers.

// Example

// For string1 = "aacb" and string2 = "aabc", the output should be
// isSubstitutionCipher(string1, string2) = true.

// Any ciphertext alphabet that starts with acb... would make this transformation possible.

// For string1 = "aa" and string2 = "bc", the output should be
// isSubstitutionCipher(string1, string2) = false.

function isSubstitutionCipher(string1, string2) {
    let seen1 = {};
    let seen2 = {};
    
    for (let i = 0; i < string1.length; i++) {
        if (!seen1.hasOwnProperty(string1[i])) {
            seen1[string1[i]] = string2[i];
        } 
        
        if (!seen2.hasOwnProperty(string2[i])) {
            seen2[string2[i]] = string1[i];
        }
        
        if (seen1[string1[i]] !== string2[i] || seen2[string2[i]] !== string1[i]) {
            return false;
        }
    }
    return true;
}
