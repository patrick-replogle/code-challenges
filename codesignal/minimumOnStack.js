/*
Implement a modified stack that, in addition to using push and pop operations, allows you to find the current minimum element in the stack by 
using a min operation.

Example

For operations = ["push 10", "min", "push 5", "min", "push 8", "min", "pop", "min", "pop", "min"], the output should be
minimumOnStack(operations) = [10, 5, 5, 5, 10].

The operations array contains 5 instances of the min operation. The results array contains 5 numbers, each representing the minimum element in 
the stack at the moment when min was called.
*/

// first pass solution
function minimumOnStack(operations) {
    let stack = [];
    let output = [];
    let min = Infinity;
    
    for (let op of operations) {
        if (op === 'min') {
            output.push(min)
        }
        else if (op === 'pop') {
            let curr = stack.pop();
            if (curr === min) {
                min = Math.min(...stack);
            }
        } 
        else {
            let value = Number(op.split(' ')[1]);
            if (value < min) min = value;
            stack.push(value);
        }
    }
    return output;
}

