/*
You are given two non-empty linked lists representing two non-negative integers. The most significant digit comes first and each 
of their nodes contain a single digit. Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Follow up:
What if you cannot modify the input lists? In other words, reversing the lists is not allowed.

Example:

Input: (7 -> 2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 8 -> 0 -> 7
*/

// first pass solution
var addTwoNumbers = function(l1, l2) {
    let stack1 = [];
    let stack2 = [];
    let stack3 = [];
    let carry = 0;
    let dummy = new ListNode(0);
    let output = dummy;
    
    while (l1 || l2) {
        if (l1) {
            stack1.push(l1.val);
            l1 = l1.next;
        }
        if (l2) {
            stack2.push(l2.val);
            l2 = l2.next;
        }
    }
    
    while (stack1.length || stack2.length || carry) {
        let a = 0;
        let b = 0;
        
        if (stack1.length) a = stack1.pop();
        if (stack2.length) b = stack2.pop();
        
        let sum = a + b + carry;
        
        if (sum > 9) {
            stack3.push(sum % 10);
            carry = 1;
        } else {
            carry = 0;
            stack3.push(sum);
        } 
    }
    
    while (stack3.length) {
        dummy.next = new ListNode(stack3.pop());
        dummy = dummy.next;
    }
    return output.next;
};

// second pass solution => reverse list after creating it
var addTwoNumbers = function(l1, l2) {
    let stack1 = [];
    let stack2 = [];
    let carry = 0;
    let dummy = null;
    let ref = null;
    
    while (l1 || l2) {
        if (l1) {
            stack1.push(l1.val);
            l1 = l1.next;
        }
        if (l2) {
            stack2.push(l2.val);
            l2 = l2.next;
        }
    }

    while (stack1.length || stack2.length || carry) {
        let a = 0;
        let b = 0;
        
        if (stack1.length) a = stack1.pop();
        if (stack2.length) b = stack2.pop();
        
        let sum = a + b + carry;
        
        if (sum > 9) {
            sum = sum % 10;
            carry = 1;
        } else {
            carry = 0;
        }
        if (!dummy) {
            dummy = new ListNode(sum);
            ref = dummy;
        } else {
            dummy.next = new ListNode(sum);
            dummy = dummy.next; 
        }
    }
    return reverseList(ref);
};

var reverseList = function(head) {
    let curr = head;
    let prev = null;
    
    while (curr) {
        let next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    return prev;
}


