// Merge two sorted linked lists and return it as a new sorted list. The new list should be made by splicing together 
// the nodes of the first two lists.

// Example 1:
// Input: l1 = [1,2,4], l2 = [1,3,4]
// Output: [1,1,2,3,4,4]

// first pass solution
function mergeTwoLists(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let head: ListNode | null = new ListNode(0);
    let curr: ListNode | null = head;
    
    while (l1 && l2) {
        if (l1.val < l2.val) {
            curr.next = new ListNode(l1.val);
            l1 = l1.next;
        } else {
            curr.next = new ListNode(l2.val);
            l2 = l2.next;
        }
        curr = curr.next;
    }
    
    while (l1) {
        curr.next = new ListNode(l1.val);
        l1 = l1.next;
        curr = curr.next;
    }
    
    while (l2) {
        curr.next = new ListNode(l2.val);
        l2 = l2.next;
        curr = curr.next;
    }
    
    return head.next;
};
