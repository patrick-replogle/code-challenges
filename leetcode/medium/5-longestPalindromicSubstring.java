class Solution {
    public String longestPalindrome(String s) {
        int longest = 0;
        String output = "";
        
        for (int i = 0; i < s.length(); i++) {
            int j = i;
            int k = i;

            while (j >= 0 && k < s.length() && s.charAt(j) == s.charAt(k)) {
                if (k - j + 1 > longest) {
                    longest = k - j + 1;
                    output = s.substring(j, k + 1);
                }
                j--;
                k++;
            }
            
            j = i;
            k = i + 1;
            
            while (j >= 0 && k < s.length() && s.charAt(j) == s.charAt(k)) {
                if (k - j + 1 > longest) {
                    longest = k - j + 1;
                    output = s.substring(j, k + 1);
                }
                j--;
                k++;
            }
        }
        return output;
    }
}
