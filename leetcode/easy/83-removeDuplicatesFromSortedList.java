class Solution {
    public ListNode deleteDuplicates(ListNode head) {
        ListNode prev = head;
        ListNode curr = head;
        HashSet<Integer> set = new HashSet<>();
        
        while (curr != null) {
            if (set.contains(curr.val)) {
                prev.next = curr.next;
                curr = curr.next;
            } else {
                set.add(curr.val);
                prev = curr;
                curr = curr.next;
            }
        } 
        return head;
    }
}
