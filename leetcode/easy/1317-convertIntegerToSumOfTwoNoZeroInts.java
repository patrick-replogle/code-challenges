// first pass solution
class Solution {
    public int[] getNoZeroIntegers(int n) {
        int[] output = new int[2];
        
        for (int i = 1; i < n; i++) {
            int low = i;
            int high = n - i;
            if (isNoZero(low) && isNoZero(high)) {
                output[0] = low;
                output[1] = high;
                break;
            }
        }
        return output;
    }
    
    public boolean isNoZero(int n) {
        while (n != 0) {
            int digit = n % 10;
            if (digit == 0) return false;
            n = (int) Math.floor(n / 10);
        }
        return true;
    }
}
