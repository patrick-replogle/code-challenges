// first pass solution
class Solution {
    public int getMaximumGenerated(int n) {
        if (n <= 1) return n;
        
        int[] arr = new int[n + 1];
        int max = 0;
        
        arr[1] = 1;
        
        for (int i = 1; i <= n; i++) {
            if (2 * i <= n) arr[2 * i] = arr[i];
            if (2 * i + 1 <= n) arr[2 * i + 1] = arr[i] + arr[i+1];
        }
        
        for (int num : arr) {
            max = Math.max(max, num);
        }
        
        return max;
    }
}
