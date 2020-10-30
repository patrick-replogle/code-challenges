// Given two strings a and b, both consisting only of lowercase English letters, your task is to calculate how many strings equal to a can 
// be constructed using only letters from the string b? Each letter can be used only once and in one string only.

// Example

// For a = "abc" and b = "abccba", the output should be stringsConstruction(a, b) = 2.

// We can construct 2 strings a = "abc" using only letters from the string b.

// For a = "ab" and b = "abcbcb", the output should be stringsConstruction(a, b) = 1.

// solution 2
function stringsConstruction(a, b) {
    let count = 0;
    
    while (true) {
        for (let char of a) {
            if (b.indexOf(char) > -1) {
                b = b.replace(char, "");
            } else {
                return count;
            }
        }
        count++;
    }
}

// solution 1 
function stringsConstruction(a, b) {
    let count = 0;
    let seen = {};
    a = a.split("").sort();
    
    for (let char of b) {
        if (!seen.hasOwnProperty(char)) {
            seen[char] = 0;
        }
        seen[char] += 1;
    }
    
    while (true) {
        for (let i = 0; i < a.length; i++) {
            if (seen.hasOwnProperty(a[i]) && seen[a[i]] > 0) {
                seen[a[i]] -= 1;
            } else {
                return count;
            }
        }
        count++;
    }
    return count;
}
