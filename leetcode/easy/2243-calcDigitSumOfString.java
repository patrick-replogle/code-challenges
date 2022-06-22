class Solution {
    public String digitSum(String s, int k) {
        
        while (s.length() > k) {
            StringBuilder nextState = new StringBuilder();
            int j = 0;
            int currDigitSum = 0;
            
            for (int i = 0; i < s.length(); i++) {
                currDigitSum += Integer.parseInt(String.valueOf(s.charAt(i)));
                j++;
                if (j == k || i == s.length() - 1) {
                    nextState.append(currDigitSum);
                    currDigitSum = 0;
                    j = 0;
                }
            }
            s = nextState.toString();
        }
        return s;
    }
}
