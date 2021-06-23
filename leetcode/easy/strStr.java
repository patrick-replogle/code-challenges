class Solution {
    public int strStr(String haystack, String needle) {
        if (haystack.equals(needle)) {
            return 0;
        }
        
        int output = -1;
        
        for (int i = 0; i < haystack.length(); i++) {
            if (i + needle.length() > haystack.length()) {
                break;
            }
            else if (haystack.substring(i, i + needle.length()).equals(needle)) {
                return i;
            }
        }
        return output;
    }
}
