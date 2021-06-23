// 203 Remove Linked List Element

// Remove all elements from a linked list of integers that have value val.

// Example:

// Input:  1->2->6->3->4->5->6, val = 6
// Output: 1->2->3->4->5


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */

// first pass solution
var removeElements = function(head, val) {
    while(head && head.val === val) {
        head = head.next;
    }
    
    let curr = head;
    
    while (curr && curr.next) {
        if (curr.next.val === val) {
            curr.next = curr.next.next;
        } else {
            curr = curr.next;
        }
    }
    return head;
};

// second pass solution
var removeElements = function(head, val) {
    while (head && head.val === val) {
        head = head.next;
    }
    
    let curr = head;
    let prev = null;
    
    while (curr) {
        if (curr.val === val) {
            prev.next = curr.next;
            curr = curr.next;
        } else {
            prev = curr;
            curr = curr.next;
        }
    }
    return head;
};
