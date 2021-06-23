/*
You are climbing a staircase that has n steps. You can take the steps either 1 or 2 at a time. Calculate how many distinct ways you can 
climb to the top of the staircase.

Example

For n = 1, the output should be
climbingStairs(n) = 1;

For n = 2, the output should be
climbingStairs(n) = 2.

You can either climb 2 steps at once or climb 1 step two times.
*/

// first pass solution
function climbingStairs(n) {
    let cache = {};
    
    function solve(n) {
        if (n === 0) return 1;
        if (n < 0) return 0;
        if (n in cache) return cache[n];
        cache[n] = solve(n - 1) + solve(n - 2);
        return cache[n]; 
    }
    return solve(n);
}

// second pass solution
function climbingStairs(n, cache={}) {
        if (n === 0) return 1;
        if (n < 0) return 0;
        if (n in cache) return cache[n];
        cache[n] = climbingStairs(n - 1, cache) + climbingStairs(n - 2, cache);
        return cache[n]; 
}
