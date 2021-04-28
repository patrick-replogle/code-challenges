/*
There is a sequence of words in CamelCase as a string of letters, s, having the following properties:

It is a concatenation of one or more words consisting of English letters.
All letters in the first word are lowercase.
For each of the subsequent words, the first letter is uppercase and rest of the letters are lowercase.
Given , determine the number of words in s.
*/

// first pass solution
function camelcase(s) {
    if (!/[A-Z]/.test(s)) {
        if (s.length === 0) {
            return 0;
        }
        return 1;
    }
    return s.replace(/[^A-Z]/g, '').length + 1;
}
