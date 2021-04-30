/*
Letters in some of the SOS messages are altered by cosmic radiation during transmission. Given the signal received by Earth as a string, , determine 
how many letters of the SOS message have been changed by radiation.

Example

The original message was SOSSOS. Two of the message's characters were changed in transit.

Function Description

Complete the marsExploration function in the editor below.

marsExploration has the following parameter(s):

string s: the string as received on Earth
Returns

int: the number of letters changed during transmission
*/

// first pass solution
function marsExploration(s) {
    let alteredChars = 0;
    
    for (let i = 0; i < s.length - 2; i += 3) {
        if (s[i] !== 'S') alteredChars++;
        if (s[i + 1] !== 'O') alteredChars++;
        if (s[i + 2] !== 'S') alteredChars++;
    }
    return alteredChars;
}
