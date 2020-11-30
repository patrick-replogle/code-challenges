// Once upon a time, in a kingdom far, far away, there lived a King Byteasar II. There was nothing special about him or his kingdom. As a 
// mediocre ruler, he preferred hunting and feasting over doing anything about his kingdom's prosperity.

// Luckily, his adviser, the wise magician Bitlin, worked for the kingdom's welfare day and night. However, since there was no one to advise him, 
// he completely forgot about one important thing: the roads! Over the years most of the two-way roads built by Byteasar's predecessors were forgotten 
// and no longer traversable. Only a few roads can still be used.

// Bitlin wanted each pair of cities to be connected, but couldn't find a way to figure out which roads are missing. Desperate, he turned to his magic 
// crystal ball for help. The crystal showed him a programmer from the distant future: you! Now you're the only one who can save the kingdom. Given the 
// existing roads and the number of cities in the kingdom, you should use the most modern technologies and find out which roads should be built again to 
// connect each pair of cities. Since the crystal ball is quite old and meticulous, it will only transfer the information if it is sorted properly.

// The roads to be built should be returned in an array sorted lexicographically, with each road stored as [cityi, cityj], where cityi < cityj.

// Example

// For cities = 4 and roads = [[0, 1], [1, 2], [2, 0]],
// the output should be
// roadsBuilding(cities, roads) = [[0, 3], [1, 3], [2, 3]].

// See the image below: the existing roads are colored black, and the ones to be built are colored red.

function roadsBuilding(cities, roads) {
    let result = [];
    let graph = {};
    
    for (let i = 0; i < cities; i++) {
        graph[i] = new Set();
    }
    
    for (let i = 0; i < roads.length; i++) {
        graph[roads[i][0]].add(roads[i][1]);
        graph[roads[i][1]].add(roads[i][0])
    }

    for (let city in graph) {
        for (let road of graph[city]) {
            let i = 0;    
            while (i < cities) {
                if (i != city && !graph[city].has(i)) {
                    result.push([Number(city), i]);
                    graph[city].add(i);
                    graph[i].add(Number(city));
                }
                i++;
            }
        }
    }
    return result.sort((a, b) => a[0] - b[0]);
}
