class Solution {
    public int percentageLetter(String s, char letter) {
        int count = 0;
        
        for (int i = 0; i < s.length(); i++) {
            if (s.charAt(i) == letter) count++;
        }
        
        if (count == 0) {
            return 0;
        }
        return 100 * count / s.length();
    }
}
