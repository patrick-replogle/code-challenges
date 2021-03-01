/*
There are n cities connected by m flights. Each flight starts from city u and arrives at v with a price w.

Now given all the cities and flights, together with starting city src and the destination dst, your task is to find the cheapest 
price from src to dst with up to k stops. If there is no such route, output -1.

Example 1:
Input: 
n = 3, edges = [[0,1,100],[1,2,100],[0,2,500]]
src = 0, dst = 2, k = 1
Output: 200
The cheapest price from city 0 to city 2 with at most 1 stop costs 200, as marked red in the picture.

Example 2:
Input: 
n = 3, edges = [[0,1,100],[1,2,100],[0,2,500]]
src = 0, dst = 2, k = 0
Output: 500
The cheapest price from city 0 to city 2 with at most 0 stop costs 500, as marked blue in the picture.
*/

// first pass DFS solution
var findCheapestPrice = function(n, flights, src, dst, K) {
    let graph = {};
    let stack = [[src, 0, 0]];
    let finalCost = Infinity;
    
    for (let edge of flights) {
        let [node, flight, price] = edge;
        
        if (!(node in graph)) graph[node] = [];
        if (!(flight in graph)) graph[flight] = [];
        
        graph[node].push([flight, price]);
    }
    
    while (stack.length) {
        let [currStop, stops, cost] = stack.pop();

        if (currStop === dst) {
            finalCost = Math.min(finalCost, cost);
            continue;
        }
        
        for (let flight of graph[currStop]) {
            let [dest, price] = flight;
            let nextStops = stops;
            
            if (dest !== dst) nextStops += 1;
            if (nextStops <= K && cost + price < finalCost) {
                stack.push([dest, nextStops, cost + price]);
            }
        }
    }
    return finalCost === Infinity ? -1 : finalCost;
};
