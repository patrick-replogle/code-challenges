/*
Given an integer n, add a dot (".") as the thousands separator and return it in string format.

Example 1:
Input: n = 987
Output: "987"

Example 2:
Input: n = 1234
Output: "1.234"

Example 3:
Input: n = 123456789
Output: "123.456.789"

Example 4:
Input: n = 0
Output: "0"
*/

// first pass solution
var thousandSeparator = function(n) {
    if (String(n).length < 4) return String(n);
    
    let output = '';
    let str = String(n);
    let i = str.length - 1;
    let periodCount = 0;
    
    while (i >= 0) {
        output = str[i] + output;
        if ((output.length - periodCount) % 3 === 0 && i !== 0) {
            output = '.' + output;
            periodCount++;
        }
        i--;
    }
    return output;
};

// second pass solution
var thousandSeparator = function(n) {
    if (String(n).length < 4) return String(n);
    
    let output = '';
    let str = String(n);
    
    for (let i = str.length - 3; i >= 0; i -= 3) {
        if (i >= 1) {
           output = '.' + str.slice(i, i + 3) + output;  
        } 
        if (i - 3 <= 0) {
            output = str.slice(0, i) + output;
        }
    }
    return output;
};
