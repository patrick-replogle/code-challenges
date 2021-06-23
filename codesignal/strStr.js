/*
Implement a function that takes two strings, s and x, as arguments and finds the first occurrence of the string x in s. The function 
should return an integer indicating the index in s of the first occurrence of x. If there are no occurrences of x in s, return -1.
*/

// first pass solution
function strstr(s, x) { 
    return s.indexOf(x);
}

// second pass solution
function strstr(s, x) { 
    for (let i = 0; i < s.length; i++) {
        if (s[i] === x[0] && s[i + x.length - 1] === x[x.length - 1]) {
            let curr = s.slice(i, i + x.length);
            if (curr === x) return i;
        }
    }
    return -1;
}
