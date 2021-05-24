// first pass solution
class Solution {
    public int[] countBits(int n) {
        int[] output = new int[n + 1];
        
        for (int i = 0; i < output.length; i++) {
            int curr = i;
            int count = 0;
            
            while (curr != 0) {
                count += curr & 1;
                curr >>= 1;
            }
            output[i] = count;
        }
        return output;
    }
}
