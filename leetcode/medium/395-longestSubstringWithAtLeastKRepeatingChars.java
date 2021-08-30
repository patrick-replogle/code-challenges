// first pass solution
class Solution {
    public int longestSubstring(String s, int k) {
        int max = 0;
        
        for (int i = 0; i < s.length() - k + 1; i++) {
            int[] count = new int[26];
            for (int j = i; j < s.length(); j++) {
                count[s.charAt(j) - 'a']++;
                if (countWindow(count, k)) {
                    max = Math.max(max, j - i + 1);
                }
            }
        }
        return max;
    }
    
    public boolean countWindow(int[] arr, int k) {
        for (int num : arr) {
            if (num != 0 && num < k) return false;
        }
        return true;
    }
}
