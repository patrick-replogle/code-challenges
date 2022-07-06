// class Solution {
// first pass solution
    public String firstPalindrome(String[] words) {
        for (String s : words) {
            StringBuilder reverseStr = new StringBuilder(s);
            
            if (s.equals(reverseStr.reverse().toString())) {
                return s;
            }
        }
        
        return "";
    }
}

// second pass solution
class Solution {
    public String firstPalindrome(String[] words) {
        for (String s : words) {
            int i = 0;
            int j = s.length() - 1;
            boolean flag = true;
            
            while (i <= j) {
                if (s.charAt(i) != s.charAt(j)) {
                    flag = false;
                    break;
                }
                i++;
                j--;
            }
            
            if (flag) return s;
        }
        
        return "";
    }
}
