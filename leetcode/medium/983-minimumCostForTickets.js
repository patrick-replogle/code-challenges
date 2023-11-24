// top down with memoization
var mincostTickets = function(days, costs) {
    let seen = new Set();
    let min = Infinity;
    
    function solve(i, amount, goodThru) {
        const memoStr = `${i}:${amount}:${goodThru}`;

        if (seen.has(memoStr) || i > days.length) return;
        if (i === days.length) { 
            min = Math.min(min, amount);
            return;
        }
        
        seen.add(memoStr);

        if (goodThru > -1) {
            while(days[i] < goodThru) {
                i++;
            }
            solve(i, amount, -1);
        } else {
            solve(i + 1, amount + costs[0], -1);
            solve(i + 1, amount + costs[1], days[i] + 7);
            solve(i + 1, amount + costs[2], days[i] + 30);
        }
    }

    solve(0, 0, -1);

    return min;
};
