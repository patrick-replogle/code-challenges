// Let's define digit degree of some positive integer as the number of times we need to replace this number with the sum of its digits until we 
// get to a one digit number.

// Given an integer, find its digit degree.

// Example

// For n = 5, the output should be
// digitDegree(n) = 0;
// For n = 100, the output should be
// digitDegree(n) = 1.
// 1 + 0 + 0 = 1.
// For n = 91, the output should be
// digitDegree(n) = 2.
// 9 + 1 = 10 -> 1 + 0 = 1.

// solution 1
function digitDegree(n) {
    if (n <= 9) {
        return 0;
    }
    
    let count = 0;
    
    while (n > 9) {
        let arr = String(n).split("");
        let curr = 0;
        
        arr.forEach((num) => {
            curr += Number(num);
        })
        
        count++;
        n = curr;
    }
    return count;
}

// solution 2
function digitDegree(n) {
    let count = 0;
    
    while (String(n).length > 1) {
        let curr = 0;
        
        for (let num of String(n)) {
            curr += Number(num);
        }
        n = curr;
        count++;
    }
    return count;
}
