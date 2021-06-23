/*
Note: Try to solve this task in O(n) time using O(1) additional space, where n is the number of elements in the list, since this is what 
you'll be asked to do during an interview.

Given a singly linked list of integers l and an integer k, remove all elements from list l that have a value equal to k.

Example

For l = [3, 1, 2, 3, 4, 5] and k = 3, the output should be
removeKFromList(l, k) = [1, 2, 4, 5];
For l = [1, 2, 3, 4, 5, 6, 7] and k = 10, the output should be
removeKFromList(l, k) = [1, 2, 3, 4, 5, 6, 7].
*/

// first pass solution
function removeKFromList(l, k) {
    while (l && l.value === k) {
        l = l.next;
    }

    let prev = l;
    let curr = l;
    
    while (curr) {
        if (curr.value === k) {
            prev.next = curr.next;
        } else {
            prev = curr;
        }
        curr = curr.next;
    }
    return l;
}
