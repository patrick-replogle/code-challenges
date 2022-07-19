class Solution {
    public boolean checkAlmostEquivalent(String word1, String word2) {
        int[] count1 = new int[26];
        int[] count2 = new int[26];
        
        for (int i = 0; i < word1.length(); i++) {
            int char1 = (int) word1.charAt(i) - 97;
            int char2 = (int) word2.charAt(i) - 97;

            count1[char1]++;
            count2[char2]++;
        }
        
        for (int i = 0; i < 26; i++) {
            if (Math.abs(count1[i] - count2[i]) > 3) return false;
        }
        
        return true;
    }
}
