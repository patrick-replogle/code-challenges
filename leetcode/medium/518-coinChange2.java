// first pass solution
class Solution {
    public int change(int amount, int[] coins) {
        Map<String, Integer> cache = new HashMap<>();
        
        return DFS(amount, coins, cache, 0);
    }
    
    public int DFS(int currAmount, int[] coins, Map<String, Integer> cache, int index) {
        String key = currAmount + ":" + index;
        
        if (cache.containsKey(key)) return cache.get(key);
        if (currAmount == 0) return 1;
        if (currAmount < 0 || index > coins.length - 1) return 0;
        
        int ways = 0;
        
        for (int i = index; i < coins.length; i++) {
            if (currAmount - coins[i] >= 0) {
                ways += DFS(currAmount - coins[i], coins, cache, i);
            } 
        }
        cache.put(key, ways);
        
        return cache.get(key);
    }
}

// optimized bottom up DP approach
class Solution {
    public int change(int amount, int[] coins) {
        int[][] dp = new int[coins.length + 1][amount + 1];
        dp[0][0] = 1;
        
        for (int i = 1; i < dp.length; i++) {
            for (int j = 0; j < dp[0].length; j++) {
                int curr = j - coins[i-1] < 0 ? 0 : dp[i][j - coins[i-1]];
                dp[i][j] = dp[i-1][j] + curr;
            }
        }
        return dp[coins.length][amount];
    }
}
