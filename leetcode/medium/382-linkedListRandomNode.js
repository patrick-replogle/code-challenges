/*
Given a singly linked list, return a random node's value from the linked list. Each node must have the same probability of being chosen.

Example 1:
Input
["Solution", "getRandom", "getRandom", "getRandom", "getRandom", "getRandom"]
[[[1, 2, 3]], [], [], [], [], []]
Output
[null, 1, 3, 2, 2, 3]

Explanation
Solution solution = new Solution([1, 2, 3]);
solution.getRandom(); // return 1
solution.getRandom(); // return 3
solution.getRandom(); // return 2
solution.getRandom(); // return 2
solution.getRandom(); // return 3
// getRandom() should return either 1, 2, or 3 randomly. Each element should have equal probability of returning.
*/

// first pass solution
class Solution {
    constructor(head) {
        this.head = head;
        this.count = this.getLength();
    }
    getLength() {
        let count = 0;
        let curr = this.head;
        
        while (curr) {
            curr = curr.next;
            count++;
        }
        return count;
    }
    getRandom() {
        let random = Math.floor(Math.random() * (this.count));
        let curr = this.head;
        let count = 0;
        
        while (count < random) {
            count++;
            curr = curr.next;
        }
        return curr.val;
    }
}
