// BFS using queue
class Solution {
    public int coinChange(int[] coins, int amount) {
        List<int[]> queue = new ArrayList<>();
        Set<Integer> set = new HashSet<>(); 
        int[] start = { 0 , 0 }; 
        queue.add(start);
        
        while (queue.size() > 0) {
            int[] curr = queue.remove(0);
            
            if (curr[0] == amount) {
                return curr[1];
            }
            
            if (!set.contains(curr[0])) {
                set.add(curr[0]);
                
                for (int coin : coins) {
                    if (curr[0] + coin <= amount) {
                        int[] next = { curr[0] + coin, curr[1] + 1};
                        queue.add(next);
                    }
                }
            }
        }
        return -1;
    }
}

// ugly and slow recursive solution using memoization
class Solution {
    public int coinChange(int[] coins, int amount) {
        if (amount == 0) return 0;
        
        HashMap<Integer, Integer> cache = new HashMap<>();
        int result = solver(coins, amount, cache);
        
        return result == Integer.MAX_VALUE ? -1 : result;
    }
    
    public int solver(int[] coins, int amount, HashMap<Integer, Integer> cache) {
        if (cache.get(amount) != null) {
            return cache.get(amount);
        }
        
        if (amount == 0) {
            return 0;
        }
        
         int output = Integer.MAX_VALUE;
        
        if (amount < 0) {
            return output;
        }
        
        for (int coin : coins) {
            int min = solver(coins, amount - coin, cache) + 1;
            // avoid java inverting number
            if (min != Integer.MAX_VALUE + 1) {
                output = Math.min(min, output);
            }
        }
        cache.put(amount, output);
        
        return cache.get(amount);
    }
}
