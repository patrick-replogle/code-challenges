// first pass solution
class Solution {
    public void reorderList(ListNode head) {
        ArrayList<ListNode> nodeArray = new ArrayList<>();
        ListNode currNode = head;
        
        while (currNode != null) {
            nodeArray.add(currNode);
            currNode = currNode.next;
        }
        
        int left = 0;
        int right = nodeArray.size() - 1;
        
        while (left < right) {
            nodeArray.get(left).next = nodeArray.get(right);
            left++;
            nodeArray.get(right).next = nodeArray.get(left);
            right--;
        }
        nodeArray.get(left).next = null;
    }
}

// second pass solution
class Solution {
    public void reorderList(ListNode head) {
        ListNode slow = head;
        ListNode fast = head;
        
        while (fast != null && fast.next != null) {
            slow = slow.next;
            fast = fast.next.next;
        }
        
        ListNode reversed = reverseList(slow);
        slow = head;
        
        while (reversed.next != null) {
            ListNode temp1 = slow.next;
            slow.next = reversed;
            slow = temp1;
            ListNode temp2 = reversed.next;
            reversed.next = slow;
            reversed = temp2;
        }
    }
    public ListNode reverseList(ListNode head) {
        ListNode prev = null;
        
        while (head != null) {
            ListNode temp = head.next;
            head.next = prev;
            prev = head;
            head = temp;
        }
        return prev;
    }
}
