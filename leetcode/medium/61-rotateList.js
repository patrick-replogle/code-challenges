// Given the head of a linked list, rotate the list to the right by k places.

// first pass solution
const rotateRight = function(head, k) {
    if (!head || !head.next || k === 0) return head;
    
    let curr = head;
    let length = 0;
    
    while (curr) {
        curr = curr.next;
        length++;
    }
    
    k = k % length; // prevent unnecessary cycles where list returns back to how it started
    
    while (k > 0) {
        let prev = null;
        let curr = head;
        
        while (curr.next) {
            prev = curr;
            curr = curr.next;
        }
        let newHead = new ListNode(curr.val);
        newHead.next = head;
        head = newHead;
        prev.next = null;
        k--;
    }
    return head;
};
