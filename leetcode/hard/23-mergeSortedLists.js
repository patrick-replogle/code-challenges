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

// first pass solution
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

// second pass solution
var mergeKLists = function(lists) {
    if (!lists.length) return null;
    
    while (lists.length > 1) {
        let list1 = lists.pop();
        let list2 = lists.pop();
        let sortedList = merge(list1, list2);
        lists.push(sortedList);
    }
    return lists.pop();
};

var merge = function(list1, list2) {
    let head = new ListNode(0);
    let headRef = head;

    while (list1 && list2) {
        if (list1.val < list2.val) {
            head.next = new ListNode(list1.val);
            list1 = list1.next;
        } else {
            head.next = new ListNode(list2.val);
            list2 = list2.next;
        }
        head = head.next;
    }

    if (list1) head.next = list1;
    else head.next = list2;

    return headRef.next;
}
