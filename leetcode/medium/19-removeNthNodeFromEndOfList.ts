// Given the head of a linked list, remove the nth node from the end of the list and return its head.

// Follow up: Could you do this in one pass?

// first pass solution
function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    if (!head || !head.next) return null;
    
    let curr: ListNode = head;
    let length: number = 0;
    
    while (curr) {
        curr = curr.next;
        length++;
    }
    
    let index = 0;
    let prev: ListNode = head;
    curr = head;
    
    if (n === length) return head.next;
    
    while (curr) {
        if (index === length - n) {
            prev.next = prev.next.next;
        }
        prev = curr;
        curr = curr.next;
        index++;
    } 
    return head;
};

// single pass solution using two pointers 
function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    if (!head || !head.next) return null;
    
    let slow: ListNode = head;
    let fast: ListNode = head;
    let i: number = 0;
    
    while (i < n) {
        fast = fast.next;
        i++;
        
        if (!fast) {
            return head.next;
        }
    }
    
    while (fast.next) {
        fast = fast.next;
        slow = slow.next;
    }
    slow.next = slow.next.next;
    
    return head;
};
