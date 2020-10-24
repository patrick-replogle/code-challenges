// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and 
// each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

let addTwoNumbers = function(l1, l2) {
    let curr = new ListNode(0);
    let output = curr;
    let carry = 0;
    
    while (l1 || l2 || carry > 0) {
        let sum = carry;

        if (l1) {
            sum += l1.val;
            l1 = l1.next;
        }

        if (l2) {
            sum += l2.val;
            l2 = l2.next;
        }

        if (sum > 9) {
            carry = 1;
            sum = sum % 10;
        } else {
            carry = 0;
        }
        
        curr.next = new ListNode(sum);
        curr = curr.next;
    }
    return output.next;
}
