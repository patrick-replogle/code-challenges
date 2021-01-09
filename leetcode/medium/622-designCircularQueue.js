// Design your implementation of the circular queue. The circular queue is a linear data structure in which the operations are performed based on 
// FIFO (First In First Out) principle and the last position is connected back to the first position to make a circle. It is also called "Ring Buffer".

// One of the benefits of the circular queue is that we can make use of the spaces in front of the queue. In a normal queue, once the queue becomes full, 
// we cannot insert the next element even if there is a space in front of the queue. But using the circular queue, we can use the space to store new values.

// Implementation the MyCircularQueue class:

// MyCircularQueue(k) Initializes the object with the size of the queue to be k.
// int Front() Gets the front item from the queue. If the queue is empty, return -1.
// int Rear() Gets the last item from the queue. If the queue is empty, return -1.
// boolean enQueue(int value) Inserts an element into the circular queue. Return true if the operation is successful.
// boolean deQueue() Deletes an element from the circular queue. Return true if the operation is successful.
// boolean isEmpty() Checks whether the circular queue is empty or not.
// boolean isFull() Checks whether the circular queue is full or not.

// first pass solution
class MyCircularQueue {
    constructor(capacity) {
        this.capacity = capacity;
        this.size = 0;
        this.storage = [];
    }
    Front() {
        if (!this.isEmpty()) {
            return this.storage[0];
        }
        return -1;
    }
    Rear() {
        if (!this.isEmpty()) {
            return this.storage[this.size - 1];
        }
        return -1;
    }
    enQueue(value) {
        if (!this.isFull()) {
            this.storage.push(value);
            this.size++;
            return true;
        }
        return false;
    }
    deQueue() {
       if (!this.isEmpty()) {
           this.storage.shift();
           this.size--;
           return true;
       } 
        return false;
    }
    isEmpty() {
        if (this.size === 0) {
            return true;
        }
        return false;
    }
    isFull() {
        if (this.size === this.capacity) {
            return true;
        }
        return false;
    }
}
