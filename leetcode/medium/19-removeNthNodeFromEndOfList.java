// first pass solution
class Solution {
    public ListNode removeNthFromEnd(ListNode head, int n) {
        if (head == null || head.next == null) {
            return null;
        }
        
        int length = 0;
        ListNode currNode = head;
        ListNode prev = head;
        
        while (currNode != null) {
            length++;
            currNode = currNode.next;
        }
        
        if (length == n) {
            return head.next;
        }
        
        currNode = head;
        
        while (length != n) {
            length--;
            prev = currNode;
            currNode = currNode.next;
        }
        
        prev.next = currNode.next;
        
        return head;
    }
}

// second pass solution
class Solution {
    public ListNode removeNthFromEnd(ListNode head, int n) {
        if (head == null || head.next == null) {
            return null;
        }
        
        ListNode dummy = new ListNode(0);
        dummy.next = head;
        ListNode slow = dummy;
        ListNode fast = dummy;
        
        for (int i = 0; i <= n; i++) {
            fast = fast.next;
        }
        
        while (fast != null) {
            slow = slow.next;
            fast = fast.next;
        }
        slow.next = slow.next.next;
        
        return dummy.next;
    }
}
