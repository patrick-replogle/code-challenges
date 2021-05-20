/*
// Definition for a Node.
class Node {
    public int val;
    public List<Node> neighbors;
    public Node() {
        val = 0;
        neighbors = new ArrayList<Node>();
    }
    public Node(int _val) {
        val = _val;
        neighbors = new ArrayList<Node>();
    }
    public Node(int _val, ArrayList<Node> _neighbors) {
        val = _val;
        neighbors = _neighbors;
    }
}
*/

class Solution {
    public Node cloneGraph(Node node) {
        if (node == null) {
            return null;
        }
        
        Stack<Node> stack = new Stack<>();
        HashMap<Integer, Node> graph = new HashMap<>();
        Set<Integer> set = new HashSet<>();
        
        stack.add(node);
        
        while (!stack.isEmpty()) {
            Node currNode = stack.pop();
            
            if (graph.get(currNode.val) == null) {
                graph.put(currNode.val, new Node(currNode.val));
            }
            
            if (!set.contains(currNode.val)) {
                set.add(currNode.val);
                
                for (Node neighbor : currNode.neighbors) {
                    if (graph.get(neighbor.val) == null) {
                        graph.put(neighbor.val, new Node(neighbor.val));
                    }
                    graph.get(currNode.val).neighbors.add(graph.get(neighbor.val));
                    stack.push(neighbor);
                }
            }
        }
        return graph.get(node.val);
    }
}
