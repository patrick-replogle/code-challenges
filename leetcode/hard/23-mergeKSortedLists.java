// first pass naive solution
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

// second pass solution using a heap
class Solution {
    public ListNode mergeKLists(ListNode[] lists) {
        PriorityQueue<Integer> pq = new PriorityQueue<>((a, b) -> a - b);
        ListNode output = new ListNode(0);
        
        for (ListNode list : lists) {
            while (list != null) {
                pq.add(list.val);
                list = list.next;
            }
        }
        
        ListNode curr = output;
        
        while (pq.size() > 0) {
            curr.next = new ListNode(pq.poll());
            curr = curr.next;
        }
        
        return output.next;
    }
}
