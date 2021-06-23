class Solution {
    public int countSubstrings(String s) {
        int count = 0;
        
        for (int i = 0; i < s.length(); i++) {
            int j = i;
            int k = i;
            
            while (j >= 0 && k < s.length() && s.charAt(j) == s.charAt(k)) {
                count++;
                j--;
                k++;
            }
            
            j = i;
            k = i + 1;
            
            while (j >= 0 && k < s.length() && s.charAt(j) == s.charAt(k)) {
                count++;
                j--;
                k++;
            }
        }
        return count;
    }
}
