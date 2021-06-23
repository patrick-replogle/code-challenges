// Given a string date representing a Gregorian calendar date formatted as YYYY-MM-DD, return the day number of the year.

// Example 1:
// Input: date = "2019-01-09"
// Output: 9
// Explanation: Given date is the 9th day of the year in 2019.

// Example 2:
// Input: date = "2019-02-10"
// Output: 41

// Example 3:
// Input: date = "2003-03-01"
// Output: 60

// first pass solution
var dayOfYear = function(date) {
    let daysPerMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    let year = Number(date.slice(0, 4));
    let month = Number(date.slice(5, 7));
    let day = Number(date.slice(8, 10));
    let output = 0;
    let isLeapYear = ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)) ? true : false;
    
    for (let i = 0; i < month; i++) {
        if (isLeapYear && i === 2) output += 1;
        if (i === month - 1) output += day;
        else output += daysPerMonth[i];
    }
    return output;
};
