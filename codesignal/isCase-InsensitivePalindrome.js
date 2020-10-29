// Given a string, check if it can become a palindrome through a case change of some (possibly, none) letters.

function isCaseInsensitivePalindrome(inputString) {
    inputString = inputString.toLowerCase();
    let reverseInputString = inputString.split("").reverse().join("");
    
    if (inputString === reverseInputString) {
        return true;
    }
    return false;
}
