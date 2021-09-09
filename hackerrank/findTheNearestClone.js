// first pass solution 
function findShortest(graphNodes, graphFrom, graphTo, ids, val) {
    let graph = {};
    let startingNodes = [];
    let min = Infinity;
    
    // init graph and find all nodes with weights that equal val
    for (let i = 0; i < ids.length; i++) {
        graph[i + 1] = new Set();
        if (ids[i] === val) startingNodes.push(i+1);
    }
    
  // add edges to graph
    for (let i = 0; i < graphFrom.length; i++) {
        let f = graphFrom[i];
        let t = graphTo[i];
        graph[f].add(t);
        graph[t].add(f);
    }
  
    // run BFS over all potential starting nodes
    for (let node of startingNodes) {
        let res = BFS(node, graph, ids, val);
        if (res > -1) min = Math.min(min, res);
    }
    
    return min === Infinity ? -1 : min;
}

function BFS(node, graph, ids, val) {
    let visited = new Set();
    let queue = [[node]];
    let min = Infinity;
    
    while (queue.length) {
        let path = queue.shift();
        let currNode = path[path.length - 1];
        
        if (path.length > 1 && ids[currNode - 1] === val) {
            min = Math.min(min, path.length - 1);
        }
        
        if (!visited.has(currNode)) {
            visited.add(currNode);
            for (let neighbor of graph[currNode]) {
                if (!path.includes(neighbor)) {
                    queue.push([...path, neighbor]);
                }
            }
        }
    }
    return min === Infinity ? -1: min;
}
