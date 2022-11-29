class Solution {
    public int pivotInteger(int n) {
        int[] asc = new int[n];
        int[] desc = new int[n];
        int sum = 0;
        
        for (int i = 0; i < n; i++) {
            sum += i + 1;
            asc[i] = sum;
        }
        
        sum = 0;
        
        for (int i = n - 1; i >= 0; i--) {
            sum += i + 1;
            desc[i] = sum;
        }
        
        for (int i = 0; i < n; i++) {
            if (asc[i] == desc[i]) return i + 1;
        }
        
        return -1;
    }
}
