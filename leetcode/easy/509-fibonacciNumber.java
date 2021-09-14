// first pass iterative approach
class Solution {
    public int fib(int n) {
        if (n == 0) return 0;
        if (n == 1 || n == 2) return 1;
        
        int prev = 1;
        int prevPrev = 1;
        
        for (int i = 3; i <= n; i++) {
            int temp = prev + prevPrev;
            prevPrev = prev;
            prev = temp;
        }
        return prev;
    }
}

// second pass recursive with memo approach
class Solution {
    Map<Integer, Integer> cache;
    
    public Solution() {
        cache = new HashMap<>();
    }
    
    public int fib(int n) {
        if (n == 0) return 0;
        if (n == 1 || n == 2) return 1;
        if (cache.containsKey(n)) return cache.get(n);
        
        int result = fib(n - 1) + fib(n - 2);
      
        cache.put(n, result);
        
        return cache.get(n);
    }
}
