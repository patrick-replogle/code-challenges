/*
The factorial of the integer , written , is defined as:

Calculate and print the factorial of a given integer.

For example, if , we calculate  and get .

Function Description

Complete the extraLongFactorials function in the editor below. It should print the result and return.

extraLongFactorials has the following parameter(s):

n: an integer
Note: Factorials of  can't be stored even in a  long long variable. Big integers must be used for such calculations. Languages like Java, 
Python, Ruby etc. can handle big integers, but we need to write additional code in C/C++ to handle huge values.

We recommend solving this challenge using BigIntegers.
*/

// first pass solution
function extraLongFactorials(n) {
    let curr = BigInt(n);
    
    for (let i = n - 1; i >= 1; i--) {
        curr = curr * BigInt(i);
    }
    console.log(curr.toString());
}

// second pass solution
function extraLongFactorials(n) {

    let curr = BigInt(n);
    
    function recurse(curr, n) {
        if (n <= 1) return curr.toString();
        return recurse(curr * BigInt(n), n - 1);
    }
    console.log(recurse(curr, n - 1));
}
