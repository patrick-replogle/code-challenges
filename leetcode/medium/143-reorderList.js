// Given a singly linked list L: L0→L1→…→Ln-1→Ln,
// reorder it to: L0→Ln→L1→Ln-1→L2→Ln-2→…

// You may not modify the values in the list's nodes, only nodes itself may be changed.

// Example 1:

// Given 1->2->3->4, reorder it to 1->4->2->3.
// Example 2:

// Given 1->2->3->4->5, reorder it to 1->5->2->4->3.

// first pass solution
var reorderList = function(head) {
    if (!head || !head.next) return null;
    
    let arr = [];
    let curr = head;
    
    while (curr) {
        arr.push(curr);
        curr = curr.next;
    }
    let left = 0;
    let right = arr.length - 1;
    let flag = true;
    curr = head;
    
    while (left <= right) {
        if (flag) {
            curr.next = arr[left];
            left++;
        } else {
            curr.next = arr[right];
            right--;
        }
        curr = curr.next;
        flag = !flag;
    }
    curr.next = null;
};

// slightly improved algorithm
var reorderList = function(head) {
    if (!head || !head.next) return null;
    
    let arr = [];
    let curr = head;
    
    while (curr) {
        arr.push(curr);
        curr = curr.next;
    }
    
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        arr[left].next = arr[right];
        left++;
        arr[right].next = arr[left];
        right--;
    }
    arr[left].next = null;
};

// using constant memory => find mid point of linked list, reverse the recond half, then link both halves together
var reorderList = function(head) {
    if (!head || !head.next) return null;
    
    // find middle of linkedList
    let slow = head;
    let fast = head;
    
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    
    // reverse second half of list
    let curr = slow;
    let prev = null;
    
    while (curr) {
        let temp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = temp;
    }
    
    // link both lists together
    let firstHead = head;
    let secondHead = prev;
    
    while (secondHead.next) {
        let firstHop = firstHead.next;
        firstHead.next = secondHead;
        firstHead = firstHop;
        let secondHop = secondHead.next;
        secondHead.next = firstHead;
        secondHead = secondHop;
    }
};

