/*
Lily likes to play games with integers. She has created a new game where she determines the difference between a number and its reverse. For instance, 
given the number , its reverse is . Their difference is . The number  reversed is , and their difference is .

She decides to apply her game to decision making. She will look at a numbered range of days and will only go to a movie on a beautiful day.

Given a range of numbered days,  and a number , determine the number of days in the range that are beautiful. Beautiful numbers are defined as numbers where  
is evenly divisible by . If a day's value is a beautiful number, it is a beautiful day. Return the number of beautiful days in the range.
*/

// first pass solution
function beautifulDays(i, j, k) {
    let days = 0;
    
    for (let m = i; m <= j; m++) {
        let reverse = Number(String(m).split('').reverse().join(''));
        if ((m - reverse) % k === 0) days++;
    }
    return days;
}
