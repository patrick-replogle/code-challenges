/*
Design a stack which supports the following operations.

Implement the CustomStack class:

CustomStack(int maxSize) Initializes the object with maxSize which is the maximum number of elements in the stack or do nothing 
if the stack reached the maxSize.
void push(int x) Adds x to the top of the stack if the stack hasn't reached the maxSize.
int pop() Pops and returns the top of stack or -1 if the stack is empty.
void inc(int k, int val) Increments the bottom k elements of the stack by val. If there are less than k elements in the stack, 
just increment all the elements in the stack.
*/

// first pass solution
class CustomStack {
    constructor(maxSize) {
        this.maxSize = maxSize;
        this.stack = [];
        this.size = 0;
    }
    push(value) {
        if (this.size < this.maxSize) {
            this.stack.push(value);
            this.size++;
        }
    }
    pop() {
        if (this.size) {
            this.size--;
            return this.stack.pop();
        }
        return -1;
    }
    increment(k, val) {
        let i = 0;
        while (i < k && i < this.size) {
            this.stack[i] += val;
            i++;
        }
    }
}
