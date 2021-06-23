/*
But, to lock the door he needs a key that is an anagram of a palindrome. He starts to go through his box of strings, checking to see if they can 
be rearranged into a palindrome. Given a string, determine if it can be rearranged into a palindrome. Return the string YES or NO.

Example

One way this can be arranged into a palindrome is . Return YES.

Function Description
Complete the gameOfThrones function below.

gameOfThrones has the following parameter(s):

string s: a string to analyze
Returns

string: either YES or NO
*/

// first pass solution
function gameOfThrones(s) {
    let dict = {};
    let oddCount = 0;
    
    for (let char of s) {
        dict[char] ? dict[char] += 1 : dict[char] = 1;
    }
    for (let key in dict) {
        if (dict[key] % 2 !== 0) {
            oddCount++;
        }
    }
    if (oddCount <= 1) {
        return 'YES';
    }
    return 'NO';
}
