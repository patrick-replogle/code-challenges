// Check whether the given string is a subsequence of the plaintext alphabet.

// Example

// For s = "effg", the output should be
// alphabetSubsequence(s) = false;
// For s = "cdce", the output should be
// alphabetSubsequence(s) = false;
// For s = "ace", the output should be
// alphabetSubsequence(s) = true;
// For s = "bxz", the output should be
// alphabetSubsequence(s) = true.

function alphabetSubsequence(s) {
    let curr = s.charCodeAt(0);
    
    for (let i = 1; i < s.length; i++) {
        if (s.charCodeAt(i) <= curr) return false;
        curr = s.charCodeAt(i);
    }
    return true;
}
