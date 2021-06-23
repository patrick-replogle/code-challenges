// Given a singly linked list, group all odd nodes together followed by the even nodes. Please note here we are talking about the node 
// number and not the value in the nodes.

// You should try to do it in place. The program should run in O(1) space complexity and O(nodes) time complexity.

// Example 1:

// Input: 1->2->3->4->5->NULL
// Output: 1->3->5->2->4->NULL
// Example 2:

// Input: 2->1->3->5->6->4->7->NULL
// Output: 2->3->6->7->1->5->4->NULL

// first pass solution
var oddEvenList = function(head) {
    if (!head || !head.next) return head;
    
    let oddHead = head;
    let evenHead = head.next;
    let evenRef = evenHead;
    let curr = head.next.next;
    let isOdd = true;
    
    while (curr) {
        if (isOdd) {
            oddHead.next = curr;
            oddHead = oddHead.next;
        } else {
            evenHead.next = curr;
            evenHead = evenHead.next;
        }
        curr = curr.next;
        isOdd = !isOdd;
        
    }
    oddHead.next = evenRef;
    evenHead.next = null;
    
    return head;
};

// second pass solution using extra memory and making a new list
var oddEvenList = function(head) {
    if (!head || !head.next) return head;
    
    let oddHead = new ListNode(head.val);
    let evenHead = new ListNode(head.next.val);
    let oddHeadRef = oddHead;
    let evenHeadRef = evenHead;
    let curr = head.next.next;
    let odd = true;
    
    while (curr) {
        if (odd) {
            oddHead.next = new ListNode(curr.val);
            oddHead = oddHead.next;
        } else {
            evenHead.next = new ListNode(curr.val);
            evenHead = evenHead.next;
        }
        odd = !odd;
        curr = curr.next;
    }
    oddHead.next = evenHeadRef;
    return oddHeadRef;
};
