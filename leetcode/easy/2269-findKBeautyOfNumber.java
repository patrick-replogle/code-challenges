class Solution {
    public int divisorSubstrings(int num, int k) {
        String s = String.valueOf(num);
        int output = 0;
        
        for (int i = 0; i <= s.length() - k; i++) {
            String subString = s.substring(i, i + k);
            
            try {
                if (num % Integer.parseInt(subString) == 0) output++;
            } catch (ArithmeticException e) {
                continue;
            }
        }

        return output;
    }
}
