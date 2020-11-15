// Given a reference of a node in a connected undirected graph.

// Return a deep copy (clone) of the graph.

// Each node in the graph contains a val (int) and a list (List[Node]) of its neighbors.

// class Node {
//     public int val;
//     public List<Node> neighbors;
// }
 
// Test case format:

// For simplicity sake, each node's value is the same as the node's index (1-indexed). For example, the first node with val = 1, 
// the second node with val = 2, and so on. The graph is represented in the test case using an adjacency list.

// Adjacency list is a collection of unordered lists used to represent a finite graph. Each list describes the set of neighbors of a 
// node in the graph.

// The given node will always be the first node with val = 1. You must return the copy of the given node as a reference to the cloned graph.

var cloneGraph = function(node) {
    if (!node) return null;
    
    let stack = [node];
    let visited = new Set();
    let graph = {};
    
    while (stack.length > 0) {
        let vertex = stack.pop();
        
        if (!(vertex.val in graph)) {
            graph[vertex.val] = new Node(vertex.val);
        }
        
        if (!visited.has(vertex.val)) {
            visited.add(vertex.val);
            
            for (let neighbor of vertex.neighbors) {
                if (!(neighbor.val in graph)) {
                    graph[neighbor.val] = new Node(neighbor.val);
                }
                graph[vertex.val].neighbors.push(graph[neighbor.val]);
                stack.push(neighbor);
            }
        }
    }
    return graph[node.val];
};
