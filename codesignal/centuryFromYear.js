// centuryFromYear

// Given a year, return the century it is in. The first century spans from the year 1 up to and including the year 100, the second - from the year 101 up to and including the year 200, etc.

// Example

// For year = 1905, the output should be
// centuryFromYear(year) = 20;
// For year = 1700, the output should be
// centuryFromYear(year) = 17.

function centuryFromYear(year) {
    if (year <= 100) {
        return 1;
    }
    
    else if (year >= 101 && year <= 1000) {
        if (year % 10 === 0) {
            return Math.floor(year / 100);
        } else {
            return Math.floor(year / 100) + 1;
        }
    }
    
    else if (year >= 1001) {
        if (year % 10 === 0) {
            return Math.floor(year / 100)
        } else {
            return Math.floor(year / 100) + 1;
        }
    }
}