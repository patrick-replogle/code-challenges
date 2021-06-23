// Write a program to find the node at which the intersection of two singly linked lists begins.

// For example, the following two linked lists:

// begin to intersect at node c1.

// Example 1:

// Input: intersectVal = 8, listA = [4,1,8,4,5], listB = [5,6,1,8,4,5], skipA = 2, skipB = 3
// Output: Reference of the node with value = 8
// Input Explanation: The intersected node's value is 8 (note that this must not be 0 if the two lists intersect). From the head of A, 
// it reads as [4,1,8,4,5]. From the head of B, it reads as [5,6,1,8,4,5]. There are 2 nodes before the intersected node in A; There are 3 
// nodes before the intersected node in B.

// first pass solution
var getIntersectionNode = function(headA, headB) {
    let set = new Set();
    
    while (headA) {
        set.add(headA);
        headA = headA.next;
    }

    while (headB) {
        if (set.has(headB)) {
            return headB;
        }
        headB = headB.next;
    }
    return null;
};

// optimal solution using two pointers
var getIntersectionNode = function(headA, headB) {    
    if (!headA || !headB) return null;
    
    let a = headA;
    let b = headB;
    
    while (a !== b) {
        a = !a ? headB: a.next;
        b = !b ? headA: b.next;
    }
    return a;
};
