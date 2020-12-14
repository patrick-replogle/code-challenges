// Given a linked list, return the node where the cycle begins. If there is no cycle, return null.

// There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. 
// Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.

// Notice that you should not modify the linked list.

// Example 1:

// Input: head = [3,2,0,-4], pos = 1
// Output: tail connects to node index 1
// Explanation: There is a cycle in the linked list, where tail connects to the second node.

// Example 2:
// Input: head = [1,2], pos = 0
// Output: tail connects to node index 0
// Explanation: There is a cycle in the linked list, where tail connects to the first node.

// first pass using o(n) memory
var detectCycle = function(head) {
    let curr = head;
    let visited = new Set();
    
    while(curr) {
        if (visited.has(curr)) return curr;
        else visited.add(curr)
        curr = curr.next;
    }
    return null;
};

// second pass using two pointers and constant memory
var detectCycle = function(head) {   
    let slow = head;
    let fast = head;
    
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
        
        if (slow === fast) {
            slow = head;
            
            while (slow) {
                if (slow === fast) return slow;
                slow = slow.next;
                fast = fast.next;
            }
        }
    }
    return null;
};
