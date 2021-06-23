class Solution {
    public int characterReplacement(String s, int k) {
        char maxChar = 'A';
        int maxCharCount = 0;
        int leftOver = 0;
        int left = 0;
        
        for (int i = 0; i < s.length(); i++) {
            int curr = 0;
            int temp = k;
            for (int j = i; j < s.length(); j++) {
                if (s.charAt(j) == s.charAt(i)) {
                    curr++;
                }
                else if (s.charAt(j) != s.charAt(i) && temp > 0) {
                    curr++;
                    temp--;
                }
                else {
                    break;
                }
            }
            if (curr >= maxCharCount) {
                maxCharCount = curr;
                leftOver = temp;
                maxChar = s.charAt(i);
                left = i - 1;
            }
        }
        
        while (left >= 0) {
            if (s.charAt(left) != maxChar && leftOver > 0) {
                leftOver--;
                maxCharCount++;
                left--;
            }
            else if (s.charAt(left) == maxChar) {
                maxCharCount++;
                left--;
            } else {
                break;
            }
        }
        return maxCharCount;
    }
}
