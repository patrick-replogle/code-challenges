// Given a string, return its encoding defined as follows:

// First, the string is divided into the least possible number of disjoint substrings consisting of identical characters
// for example, "aabbbc" is divided into ["aa", "bbb", "c"]
// Next, each substring with length greater than one is replaced with a concatenation of its length and the repeating character
// for example, substring "bbb" is replaced by "3b"
// Finally, all the new strings are concatenated together in the same order and a new string is returned.
// Example

// For s = "aabbbc", the output should be
// lineEncoding(s) = "2a3bc".

function lineEncoding(s) {
    let arr = [];
    let result = "";
    let i = 0;
    
    while (i < s.length) {
        let temp = "";
        let curr = s[i]
        while(s[i] === curr) {
            temp += s[i];
            i++;
        }
        arr.push(temp)
    }
    
    for (let str of arr) {
        if (str.length === 1) {
            result += str;
        } else {
            result += str.length + str[0];
        }
    }
    return result;
}
