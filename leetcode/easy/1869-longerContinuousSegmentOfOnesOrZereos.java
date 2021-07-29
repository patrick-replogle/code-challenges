// first pass solution
class Solution {
    public boolean checkZeroOnes(String s) {
        int maxOnes = s.charAt(0) == '1' ? 1 : 0;
        int maxZereos = s.charAt(0) == '0' ? 1 : 0;
        int currOnes = maxOnes;
        int currZereos = maxZereos;
        
        for (int i = 1; i < s.length(); i++) {
            if (s.charAt(i) == '0') {
                currOnes = 0;
                if (s.charAt(i-1) == '0') currZereos++;
                else currZereos = 1;
            } else {
                currZereos = 0;
                if (s.charAt(i) == '1') currOnes++;
                else currOnes = 1;
            }
            maxOnes = Math.max(maxOnes, currOnes);
            maxZereos = Math.max(maxZereos, currZereos);
        }
        
        return maxOnes > maxZereos;
    }
}
