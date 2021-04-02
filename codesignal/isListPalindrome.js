/*
Note: Try to solve this task in O(n) time using O(1) additional space, where n is the number of elements in l, since this is what 
you'll be asked to do during an interview.

Given a singly linked list of integers, determine whether or not it's a palindrome.

Note: in examples below and tests preview linked lists are presented as arrays just for simplicity of visualization: in real data you 
will be given a head node l of the linked list

Example

For l = [0, 1, 0], the output should be
isListPalindrome(l) = true;

For l = [1, 2, 2, 3], the output should be
isListPalindrome(l) = false.
*/

// first pass solution using extra memory
function isListPalindrome(l) {
    let arr = [];
    let curr = l;
    
    while (curr) {
        arr.push(curr.value);
        curr = curr.next;
    }
    return arr.join('') === arr.reverse().join('');
}

// second pass solution using constant memory and reversing half the linked list
function isListPalindrome(l) {
    let slow = l;
    let fast = l;
    let counter = 0;
    
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
        counter++;
    }
    let curr = slow;
    let prev = null;
    
    while (curr) {
        let temp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = temp;
    }
    while (counter > 0) {
        if (l.value !== prev.value) return false;
        l = l.next;
        prev = prev.next;
        counter--;
    }
    return true;
}
