class Solution {
    public ListNode mergeTwoLists(ListNode l1, ListNode l2) {
        ListNode output = new ListNode(0);
        ListNode dummy = output;
        
        while (l1 != null && l2 != null) {
            if (l1.val <= l2.val) {
                output.next = new ListNode(l1.val);
                l1 = l1.next;
            } else {
                output.next = new ListNode(l2.val);
                l2 = l2.next;
            }
            output = output.next;
        }
        
        while (l1 != null) {
            output.next = new ListNode(l1.val);
            l1 = l1.next; 
            output = output.next;
        }
        
        while (l2 != null) {
            output.next = new ListNode(l2.val);
            l2 = l2.next; 
            output = output.next;
        }
        return dummy.next;
    }
}
