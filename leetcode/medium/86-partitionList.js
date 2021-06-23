// Given a linked list and a value x, partition it such that all nodes less than x come before nodes greater than or equal to x.

// You should preserve the original relative order of the nodes in each of the two partitions.

// Example:

// Input: head = 1->4->3->2->5->2, x = 3
// Output: 1->2->2->4->3->5

// first pass solution using extra space and a second pass thru the list
var partition = function(head, x) {
    let curr = head;
    let first = [];
    let second = [];
    
    while (curr) {
        if (curr.val < x) {
            first.push(curr.val);
        } else {
            second.push(curr.val);
        }
        curr = curr.next;
    }
    
    curr = head;
    let i = 0;
    
    while (i < first.length) {
        curr.val = first[i];
        curr = curr.next;
        i++;
    }
    
    i = 0;
    
    while (i < second.length) {
        curr.val = second[i];
        curr = curr.next;
        i++;
    }
    return head;
};
