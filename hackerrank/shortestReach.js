function bfs(n, m, edges, s) {
    let output = [];
    let graph = {};
    let reached = {};
    let queue = [[s, 0]];
    let visited = new Set();
    
    for (let i = 1; i <= n; i++) {
        graph[i] = new Set();
    }
    
    for (let [x, y] of edges) {
        graph[x].add(y);
        graph[y].add(x);
    }
        
    while (queue.length) {
        let [node, currScore] = queue.shift();
        
        if (!visited.has(node)) {
            visited.add(node);
            reached[node] = currScore;
            for (let neighbor of graph[node]) {
                queue.push([neighbor, currScore + 6]);
            }
        }
    }
    
    for (let i = 1; i <= n; i++) {
        if (i === s) continue;
        output.push(i in reached ? reached[i] : -1);
    }
    
    return output;
}
