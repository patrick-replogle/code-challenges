class Solution {
    public ListNode reverseList(ListNode head) {
        ListNode prev = null;
        ListNode currNode = head;
        
        while (currNode != null) {
            ListNode tempNode = currNode.next;
            currNode.next = prev;
            prev = currNode;
            currNode = tempNode;
        }
        return prev;
    }
}
