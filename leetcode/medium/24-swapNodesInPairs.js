// Given a linked list, swap every two adjacent nodes and return its head.

// Example 1:

// Input: head = [1,2,3,4]
// Output: [2,1,4,3]
// Example 2:

// Input: head = []
// Output: []
// Example 3:

// Input: head = [1]
// Output: [1]

// first pass solution 
var swapPairs = function(head) {
    if (!head || !head.next) return head;
    
    let curr = head;
    
    while (curr && curr.next) {
        let temp = curr.val;
        curr.val = curr.next.val;
        curr.next.val = temp;
        curr = curr.next.next;
    }
    return head;
};

// second pass solution using extra memory
var swapPairs = function(head) {
    if (!head || !head.next) return head;
    
    let dummy = new ListNode(0);
    let output = dummy;
    
    while (head && head.next) {
        dummy.next = new ListNode(head.next.val);
        dummy = dummy.next;
        dummy.next = new ListNode(head.val);
        dummy = dummy.next;
        head = head.next.next;
    }
    if (head) {
        dummy.next = new ListNode(head.val);
    }
    return output.next;
};
