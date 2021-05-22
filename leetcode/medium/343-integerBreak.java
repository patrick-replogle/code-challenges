class Solution {
    public int integerBreak(int n) {
        if (n == 2) return 1;
        if (n == 3) return 2;
        
        int output = 1;
        
        while (n > 0) {
            if (n - 3 == 0 || n - 3 >= 2) {
                output *= 3;
                n -= 3;
            } else {
                output *= 2;
                n -= 2;
            }
        }
        return output;
    }
}
