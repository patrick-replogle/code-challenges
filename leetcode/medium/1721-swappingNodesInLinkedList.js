/*
You are given the head of a linked list, and an integer k.

Return the head of the linked list after swapping the values of the kth node from the beginning and the kth node from the end (the list is 1-indexed).

Example 1:
Input: head = [1,2,3,4,5], k = 2
Output: [1,4,3,2,5]

Example 2:
Input: head = [7,9,6,6,7,8,3,0,9,5], k = 5
Output: [7,9,6,6,8,7,3,0,9,5]

Example 3:
Input: head = [1], k = 1
Output: [1]
*/

// first pass solution
var swapNodes = function(head, k) {
    if (!head || k === 0) return head;
    
    let left = head;
    let count = 1;
    
    while (left && count < k) {
        left = left.next;
        count++;
    }
   
    let right = left;
    
    while (right && right.next) {
        right = right.next;
        count++;
    }
    
    let target = count - k + 1;
    right = head;
    count = 1;
    
    while (count < target) {
        right = right.next;
        count++;
    }
    
    let temp = left.val;
    left.val = right.val;
    right.val = temp;
    
    return head;
};
