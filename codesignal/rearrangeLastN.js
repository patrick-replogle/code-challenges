// first pass solution
function rearrangeLastN(l, n) {  
    if (n <= 0) return l;
    
    let slow = l;
    let fast = l;
    let output = null;
    
    while (fast && n > 0) {
        fast = fast.next;
        n--;
    }
    if (!fast || n >= 1) return l; // n is greater than length of list
    
    while (fast) {
        let temp = slow.next;
        if (!fast.next) slow.next = null; // remove link to last k nodes since they will be added to the start
        slow = temp;
        fast = fast.next;
    }
    
    output = slow; // maintain reference to new head so it can be returned
    
    while (slow && slow.next) {
        slow = slow.next;
    }
    
    slow.next = l;
    
    return output;
}
