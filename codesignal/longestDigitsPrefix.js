// Given a string, output its longest prefix which contains only digits.

// Example

// For inputString = "123aa1", the output should be
// longestDigitsPrefix(inputString) = "123".

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
