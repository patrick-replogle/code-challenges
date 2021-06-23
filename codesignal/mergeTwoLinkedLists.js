/*
Note: Your solution should have O(l1.length + l2.length) time complexity, since this is what you will be asked to accomplish in an interview.

Given two singly linked lists sorted in non-decreasing order, your task is to merge them. In other words, return a singly linked list, also 
sorted in non-decreasing order, that contains the elements from both original lists.

Example

For l1 = [1, 2, 3] and l2 = [4, 5, 6], the output should be
mergeTwoLinkedLists(l1, l2) = [1, 2, 3, 4, 5, 6];
For l1 = [1, 1, 2, 4] and l2 = [0, 3, 5], the output should be
mergeTwoLinkedLists(l1, l2) = [0, 1, 1, 2, 3, 4, 5].
*/

// first pass solution
function mergeTwoLinkedLists(l1, l2) {
    let dummy = new ListNode(0);
    let output = dummy;
    
    while(l1 && l2) {
        if (l1.value < l2.value) {
            dummy.next = new ListNode(l1.value);
            l1 = l1.next;
        } else {
            dummy.next = new ListNode(l2.value);
            l2 = l2.next;
        }
        dummy = dummy.next;
    }
    
    while (l1 || l2) {
        if (l1) {
           dummy.next = new ListNode(l1.value); 
           l1 = l1.next;
        } else {
            dummy.next = new ListNode(l2.value); 
            l2 = l2.next;  
        }
        dummy = dummy.next;
    }
    return output.next;
}
