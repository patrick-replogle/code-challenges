
function candies(n, arr) {
    let dp = new Array(n).fill(1);
    
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > arr[i-1]) dp[i] = dp[i-1] + 1;
    }
    
    for(let i = n - 2; i >= 0; i--) {
        if (arr[i] > arr[i+1] && dp[i] <= dp[i+1]) dp[i] = dp[i+1] + 1;
    }
    
    return dp.reduce((acc, el) => acc + el);
}
