// Given the head of a linked list, return the list after sorting it in ascending order.

// Follow up: Can you sort the linked list in O(n logn) time and O(1) memory (i.e. constant space)?

// Example 1:

// Input: head = [4,2,1,3]
// Output: [1,2,3,4]

// Example 2:
// Input: head = [-1,5,3,4,0]
// Output: [-1,0,3,4,5]

// Example 3:
// Input: head = []
// Output: []

// first pass solution
var sortList = function(head) {
    let values = [];
    let curr = head;
    
    while (curr) {
        values.push(curr.val);
        curr = curr.next;
    }
    
    values.sort((a, b) => b - a);
    curr = head;
    
    while (curr) {
        curr.val = values.pop();
        curr = curr.next;
    }
    return head;
};
