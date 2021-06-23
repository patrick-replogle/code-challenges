// You are choreographing a circus show with various animals. For one act, you are given two kangaroos on a number line ready to 
// jump in the positive direction (i.e, toward positive infinity).

// The first kangaroo starts at location x1 and moves at a rate of v1 meters per jump.
// The second kangaroo starts at location x2  and moves at a rate of v2 meters per jump.
// You have to figure out a way to get both kangaroos at the same location at the same time as part of the show. If it is possible, 
// return YES, otherwise return NO.

// first brute for attempt
function kangaroo(x1, v1, x2, v2) {
    let jumps = 0;

    while (jumps < 5000) {
        if (x1 === x2) return 'YES';
        x1 += v1;
        x2 += v2;
        jumps++;
    }
    return 'NO';
}

// second solution
function kangaroo(x1, v1, x2, v2) {
    if (x2 > x1 && v2 >= v1) return 'NO';
    else if ((x2 - x1) % (v2 - v1) !== 0) return 'NO';
    else return 'YES';
}
