class Solution {
    public ListNode mergeKLists(ListNode[] lists) {
        ArrayList<Integer> values = new ArrayList<>();
        ListNode dummy = new ListNode(0);
        ListNode reference = dummy;
        
        for (ListNode list : lists) {
            while (list != null) {
                values.add(list.val);
                list = list.next;
            }
        }
        
        values.sort((v1, v2) -> v1 - v2);
        
        for (int val : values) {
            dummy.next = new ListNode(val);
            dummy = dummy.next;
        }
        
        return reference.next;
    }
}
