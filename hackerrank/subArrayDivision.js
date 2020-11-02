// Given a chocolate bar, two children, Lily and Ron, are determining how to share it. Each of the squares has an integer on it.

// Lily decides to share a contiguous segment of the bar selected such that:

// The length of the segment matches Ron's birth month, and,
// The sum of the integers on the squares is equal to his birth day.
// You must determine how many ways she can divide the chocolate.

function birthday(s, d, m) {
    let count = 0;
    let curr = 0
    let i = 0;
    let j = 0;

    while (j < m) {
        curr += s[j];
        j++;
    }
  
    if (curr === d) count++;

    while (j < s.length) {
        curr -= s[i];
        curr += s[j];
        
        if (curr === d) count++;
        j++;
        i++;
    }
    return count;
}
