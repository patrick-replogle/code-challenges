// We are given head, the head node of a linked list containing unique integer values.

// We are also given the list G, a subset of the values in the linked list.

// Return the number of connected components in G, where two values are connected if they appear consecutively in the linked list.

// Example 1:
// Input: 
// head: 0->1->2->3
// G = [0, 1, 3]
// Output: 2
// Explanation: 
// 0 and 1 are connected, so [0, 1] and [3] are the two connected components.

// Example 2:
// Input: 
// head: 0->1->2->3->4
// G = [0, 3, 1, 4]
// Output: 2
// Explanation: 
// 0 and 1 are connected, 3 and 4 are connected, so [0, 1] and [3, 4] are the two connected components.

// first pass solution
var numComponents = function(head, G) {
    if (!head) return 0;
    
    let set = new Set(G);
    let connections = 0;
    let curr = head;

    while (curr) {
        if (set.has(curr.val)) {
            if (curr.next && !set.has(curr.next.val)) {
                connections++;
            } else if (!curr.next) {
                connections++;
            }
        }
        curr = curr.next;
    }
    return connections;
};
