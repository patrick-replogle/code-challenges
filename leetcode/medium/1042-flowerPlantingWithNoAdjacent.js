var gardenNoAdj = function(n, paths) {
    let graph = buildGraph(n, paths);

    return dfs(1, [], n, graph)
};

/** search for valid path */
function dfs(node, path, n, graph) {
    if (path.length === n) return true;

    for (let c = 1; c <= 4; c++) {
        if (isValid(node, c, path, graph)) {
            path.push(c);
            if (dfs(node + 1, path, n, graph)) {
                return path;
            }
            /** backtrack if there is no valid path with this option */
            path.pop();  
        }
    }
    return false;
} 

/** check if node's neighbors already share the same color */
function isValid(node, c, path, graph) {
    /** node has no neighbors */
    if (!(node in graph)) return true;

    for (let vertex of graph[node]) {
        /** node's neighbor shares same color */
        if (path[vertex - 1] === c) {
            return false;
        }
    }
    return true;
} 

/** build adjacency list */
function buildGraph(n, paths) {
    let graph = {};

    for (let [node, vertex] of paths) {
        if (!(node in graph)) graph[node] = new Set();
        if (!(vertex in graph)) graph[vertex] = new Set();
        graph[node].add(vertex);
        graph[vertex].add(node);
    }

    return graph;
}

