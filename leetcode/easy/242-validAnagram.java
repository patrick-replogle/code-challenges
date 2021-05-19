class Solution {
    public boolean isAnagram(String s, String t) {
        if (s.length() != t.length()) {
            return false;
        }
        
        int[] charCount = new int[26];
        
        for (int i = 0; i < s.length(); i++) {
            charCount[(int) s.charAt(i) - 97]++;
            charCount[(int) t.charAt(i) - 97]--;
        }
        
        for (int n : charCount) {
            if (n != 0) {
                return false;
            }
        }
        return true;
    }
}
