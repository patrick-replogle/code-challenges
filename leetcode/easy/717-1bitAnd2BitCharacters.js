// We have two special characters. The first character can be represented by one bit 0. The second character can be represented by two bits (10 or 11).

// Now given a string represented by several bits. Return whether the last character must be a one-bit character or not. The given string will 
// always end with a zero.

// Example 1:
// Input: 
// bits = [1, 0, 0]
// Output: True
// Explanation: 
// The only way to decode it is two-bit character and one-bit character. So the last character is one-bit character.

// Example 2:
// Input: 
// bits = [1, 1, 1, 0]
// Output: False
// Explanation: 
// The only way to decode it is two-bit character and two-bit character. So the last character is NOT one-bit character.

// first pass solution
var isOneBitCharacter = function(bits) {
    let set = new Set(['10', '11'])
    let i = 0;
    bits = bits.join('');
    
    while (i < bits.length) {
        if (set.has(bits[i] + bits[i+1])) {
            i += 2;
            if (i === bits.length) return false;
        } else {
            i++;
        }
    }
    return true;
};

// second pass solution using constant memory
var isOneBitCharacter = function(bits) {
    let i = 0;
    
    while (i < bits.length - 1) {
        i += bits[i] + 1;
    }
    return i === bits.length - 1;
};
