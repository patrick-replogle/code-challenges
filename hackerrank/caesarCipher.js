/*
Julius Caesar protected his confidential information by encrypting it using a cipher. Caesar's cipher shifts each letter by a number of letters. If 
the shift takes you past the end of the alphabet, just rotate back to the front of the alphabet. In the case of a rotation by 3, w, x, y and z would map 
to z, a, b and c.

Original alphabet:      abcdefghijklmnopqrstuvwxyz
Alphabet rotated +3:    defghijklmnopqrstuvwxyzabc
*/

// first pass solution
function caesarCipher(s, k) {
    let letters = 'abcdefghijklmnopqrstuvwxyz';
    let output = '';
    
    for (let char of s) 
        if (letters.includes(char.toLowerCase())) {
            let index = (letters.indexOf(char.toLowerCase()) + k) % 26;
            
            if (char === char.toLowerCase()) {
                output += letters[index];
            } else {
                output += letters[index].toUpperCase();
            }
        } else {
            output += char;
        }
    }
    return output;
}
