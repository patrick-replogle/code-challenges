// You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.

// Merge all the linked-lists into one sorted linked-list and return it.

// Example 1:

// Input: lists = [[1,4,5],[1,3,4],[2,6]]
// Output: [1,1,2,3,4,4,5,6]
// Explanation: The linked-lists are:
// [
// 1->4->5,
//  1->3->4,
//  2->6
// ]
// merging them into one sorted list:
// 1->1->2->3->4->4->5->6

var mergeKLists = function(lists) {    
    let arr = [];
    
    for (let list of lists) {
        let curr = list;
        
        while (curr) {
            arr.push(curr.val);
            curr = curr.next;
        }
    }
    if (arr.length === 0) return null;
    
    arr.sort((a, b) => a - b);
    let head = new ListNode(arr[0]);
    let curr = head;
    
    for (let i = 1; i < arr.length; i++) {
        curr.next = new ListNode(arr[i]);
        curr = curr.next;
    }
    
    return head;
};
