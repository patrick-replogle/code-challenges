class Solution {
    public String makeFancyString(String s) {
        if (s.length() < 3) return s;
        
        StringBuilder sb = new StringBuilder();
        
        sb.append(s.substring(0, 2));
        
        for (int i = 2; i < s.length(); i++) {
            char currChar = s.charAt(i);
            int len = sb.length();
            
            
            if (currChar == sb.charAt(len - 1) && currChar == sb.charAt(len - 2)) continue;
            sb.append(currChar);
        }
        return sb.toString();
    }
}
