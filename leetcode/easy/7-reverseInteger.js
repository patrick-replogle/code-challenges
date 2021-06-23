// Given a 32-bit signed integer, reverse digits of an integer.

// Note:
// Assume we are dealing with an environment that could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. 
// For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.

var reverse = function(x) {
    let str = String(x).split("").reverse().join("")
    result = "";
    
    if(str[str.length - 1] === "-") {
        str = str.slice(0, -1);
        str = "-" + str;
    }
    
    if(Number(str) > (2**31) - 1 || Number(str) < -(2**31)) return 0;
    else return str
};
