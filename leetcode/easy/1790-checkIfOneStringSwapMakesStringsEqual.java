class Solution {
    public boolean areAlmostEqual(String s1, String s2) {
        int[] s1Chars = new int[26];
        int[] s2Chars = new int[26];
        int diffCount = 0;
        
        for (int i = 0; i < s1.length(); i++) {
            if (s1.charAt(i) != s2.charAt(i)) {
                diffCount++;
            }
            s1Chars[(int) s1.charAt(i) - 97]++;
            s2Chars[(int) s2.charAt(i) - 97]++;
        }
        
        for (int i = 0; i < s1Chars.length; i++) {
            if (s1Chars[i] != s2Chars[i]) return false;
        }
        
        return diffCount == 0 || diffCount == 2;
    }
}
