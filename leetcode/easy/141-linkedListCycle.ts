// Given head, the head of a linked list, determine if the linked list has a cycle in it.

// There is a cycle in a linked list if there is some node in the list that can be reached again by continuously 
// following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. 
// Note that pos is not passed as a parameter.

// Return true if there is a cycle in the linked list. Otherwise, return false.

// first pass solution using a dictionary 
function hasCycle(head: ListNode | null): boolean {
    let curr: ListNode | null = head;
    let prev: ListNode | null = head;
    let seen: { [key:string]: boolean } = {};
    
    while(curr) {
        if (`${prev.val}=>${curr.val}` in seen) {
            return true;
        }
        seen[`${prev.val}=>${curr.val}`] = true;
        prev = curr;
        curr = curr.next;
    }
    return false;
};

// second pass solution using two pointers
function hasCycle(head: ListNode | null): boolean {
    let slow: ListNode | null = head;
    let fast: ListNode | null = head;
    
    while(fast) {
        if (!fast.next) {
            return false;
        }
        slow = slow.next;
        fast = fast.next.next;
        
        if (slow === fast) {
            return true;
        }
    }
    return false;
};
