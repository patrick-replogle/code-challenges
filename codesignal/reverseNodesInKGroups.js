// first pass solution
function reverseNodesInKGroups(l, k) {
    let slow = l;
    let fast = l;
    let output = null;
    let prev = null;
    
    while (slow) {
        let count = 1;
        while (fast && count != k + 1) {
            fast = fast.next;
            count++;
        }
        if (count === k + 1) slow = reverseList(slow, k); // only reverse if there are k nodes to reverse at the end
        if (prev) prev.next = slow; // link last node of prev iteration to the start of the current iteration

        if (!output) output = slow; // store new head on first iteration so it can be returned
        while (slow && slow.next) {
            slow = slow.next;
        }
        
        prev = slow;
        slow.next = fast;
        slow = fast;
    }
    return output;
}

function reverseList(l, k) {
    let prev = null;
    let curr = l;
    
    while (curr && k > 0) {
        let temp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = temp;
        k--;
    }
    return prev;
}
