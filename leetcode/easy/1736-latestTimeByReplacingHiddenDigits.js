/*
You are given a string time in the form of hh:mm, where some of the digits in the string are hidden (represented by ?).

The valid times are those inclusively between 00:00 and 23:59.

Return the latest valid time you can get from time by replacing the hidden digits.

Example 1:
Input: time = "2?:?0"
Output: "23:50"
Explanation: The latest hour beginning with the digit '2' is 23 and the latest minute ending with the digit '0' is 50.

Example 2:
Input: time = "0?:3?"
Output: "09:39"
*/

// first pass solution
var maximumTime = function(time) {
    let tuple = time.split(':');
    let hour = tuple[0];
    let min = tuple[1];
    
    if (hour.includes('?')) {
        if (hour[0] === '?' && hour[1] === '?') tuple[0] = '23';
        else if (hour[0] === '?' && hour[1] <= '3') tuple[0] = '2' + hour[1];
        else if (hour[0] === '?' && hour[1] > '3') tuple[0] = '1' + hour[1];
        else if (hour[0] <= '1' && hour[1] === '?') tuple[0] = hour[0] + '9';
        else tuple[0] = '23';
    } 
    if (min.includes('?')) {
        if (min[0] === '?' && min[1] === '?') tuple[1] = '59';
        else if (min[0] === '?') tuple[1] = '5' + min[1];
        else tuple[1] = min[0] + '9';
    }
    return tuple.join(":");
};

// second pass solution
var maximumTime = function(time) {
    let arr = time.split('');
    if (arr[0] === '?') arr[0] = arr[1] <= '3' || arr[1] === '?' ? '2' : '1';
    if (arr[1] === '?') arr[1] = arr[0] <= '1' ? '9' : '3';
    if (arr[3] === '?') arr[3] = '5';
    if (arr[4] === '?') arr[4] = '9';
    
    return arr.join('');
};
