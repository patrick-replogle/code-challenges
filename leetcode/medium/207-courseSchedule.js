// There are a total of numCourses courses you have to take, labeled from 0 to numCourses-1.

// Some courses may have prerequisites, for example to take course 0 you have to first take course 1, which is expressed as a pair: [0,1]

// Given the total number of courses and a list of prerequisite pairs, is it possible for you to finish all courses?

// Example 1:

// Input: numCourses = 2, prerequisites = [[1,0]]
// Output: true
// Explanation: There are a total of 2 courses to take. 
//              To take course 1 you should have finished course 0. So it is possible.
// Example 2:

// Input: numCourses = 2, prerequisites = [[1,0],[0,1]]
// Output: false
// Explanation: There are a total of 2 courses to take. 
//              To take course 1 you should have finished course 0, and to take course 0 you should
//              also have finished course 1. So it is impossible.

// first pass solution using DFS and backtracking
var canFinish = function(numCourses, prerequisites) {
    let graph = {};
    let visited = new Set();
    
    for (let i = 0; i < numCourses; i++) {
        graph[i] = new Set();
    }
    
    for (let arr of prerequisites) {
        graph[arr[0]].add(arr[1]);
    }
    
    for (let i = 0; i < numCourses; i++) {
        if (graph[i].size > 0) {
            if (!DFS(i, visited, graph)) {
                return false;
            }
        }
    }
    return true;
};

var DFS = function(vertex, visited, graph) {
    if (visited.has(vertex)) return false;
    
    visited.add(vertex);
    
    for (let edge of graph[vertex]) {
        if (!DFS(edge, visited, graph)) {
            return false;
        }
    }
    
    visited.delete(vertex); 
    return true;
}
