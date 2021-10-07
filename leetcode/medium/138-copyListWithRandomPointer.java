// first pass solution
class Solution {
    public Node copyRandomList(Node head) {
        Map<Node, Node> map = new HashMap<>();
        Node curr = head;
        
        while (curr != null) {
            map.put(curr, new Node(curr.val));
            curr = curr.next;
        }
        
        curr = head;
        
        while (curr != null) {
            Node node = map.get(curr);
            node.next = map.get(curr.next);
            node.random = curr.random != null ? map.get(curr.random) : null;
            curr = curr.next;
        }
        return map.get(head);
    }
}
