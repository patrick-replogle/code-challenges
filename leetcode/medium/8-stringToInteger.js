// Implement atoi which converts a string to an integer.

// The function first discards as many whitespace characters as necessary until the first non-whitespace character is found. 
// Then, starting from this character takes an optional initial plus or minus sign followed by as many numerical digits as possible, 
// and interprets them as a numerical value.

// The string can contain additional characters after those that form the integral number, which are ignored and have no effect on 
// the behavior of this function.

// If the first sequence of non-whitespace characters in str is not a valid integral number, or if no such sequence exists because 
// either str is empty or it contains only whitespace characters, no conversion is performed.

// If no valid conversion could be performed, a zero value is returned.

var myAtoi = function(str) {
    str = str.trim();
    let isNegative = false;
    let result = "";
    let signs = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "-", "+"];
    let nums = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    
    if (str.length === 0 || !signs.includes(str[0])) return 0
    
    if(str[0] === "-") isNegative = true;
    else if (str[0] === "+") isNegative = false;
    else result += str[0];
    
    for (let i = 1; i < str.length; i++) {
        if (!nums.includes(str[i])) break;
        result += str[i];
    }

    if (!result) return 0;
    if (isNegative) result = "-" + result;
    if (result > (2**31 - 1)) return 2**31 - 1;
    if (result < -(2**31)) return -(2**31)
    return Number(result)
};
