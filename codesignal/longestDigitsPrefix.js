// Given a string, output its longest prefix which contains only digits.

// Example

// For inputString = "123aa1", the output should be
// longestDigitsPrefix(inputString) = "123".


// solution 1
function longestDigitsPrefix(inputString) {
    let digits = new Set(["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]);
    let max = "";
    let i = 0;
    
    if (!digits.has(inputString[0])) {
        return "";
    }
    
    while (digits.has(inputString[i])) {
        max += inputString[i];
        i++;
    }    
    return max;
}

// solution 2
function longestDigitsPrefix(inputString) {
    let max = "";
    let i = 0;
    let regex = /[0-9]/
    
    if (!regex.test(inputString[0])) {
        return "";
    }
    
    while (regex.test(inputString[i])) {
        max += inputString[i];
        i++;
    }    
    return max;
}
