class Solution {
    public boolean checkString(String s) {
        boolean b = false;
        
        for (int i = 0; i < s.length(); i++) {
            if (s.charAt(i) == 'b') b = true;
            if (b == true && s.charAt(i) == 'a') return false;
        }
        
        return true;
    }
}
