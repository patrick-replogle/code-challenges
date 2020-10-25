// Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.

// Follow up: Could you solve it without converting the integer to a string?

var isPalindrome = function(x) {
    return String(x) === String(x).split("").reverse().join("");
};
