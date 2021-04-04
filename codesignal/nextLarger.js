/*
Given an array a composed of distinct elements, find the next larger element for each element of the array, i.e. the first element to the 
right that is greater than this element, in the order in which they appear in the array, and return the results as a new array of the same 
length. If an element does not have a larger element to its right, put -1 in the appropriate cell of the result array.

Example

For a = [6, 7, 3, 8], the output should be
nextLarger(a) = [7, 8, 8, -1].

In this array, the next larger element for 6 is 7, for 7 is 8, for 3 is 8 (7 is not a valid option since elements from a can only be compared 
                                                                           to elements to their right), and for 8 there is no such element, so 
we put -1 in the last cell.
*/

// first pass solution
function nextLarger(a) {
    let output = new Array(a.length).fill(null);
    output[output.length - 1] = -1;
    
    for (let i = 0; i < a.length - 1; i++) {
        let bigger = -1;
        for (let j = i + 1; j < a.length; j++) {
            if (a[j] > a[i]) {
                bigger = a[j];
                break;
            }
        }
        output[i] = bigger;
    }
    return output;
}

// second pass solution using a stack
function nextLarger(a) {
    let stack = [];
    let output = [];
    
    for (let i = a.length - 1; i >= 0 ; i--) {
        let num = a[i];
        while (stack.length && num > stack[stack.length - 1]) {
            stack.pop();
        }
        output.push(stack.length ? stack[stack.length - 1] : -1);
        stack.push(num);
    }
    return output.reverse();
}

