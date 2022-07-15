class Solution {
    public String[] divideString(String s, int k, char fill) {
        int len = s.length() % k == 0 ? s.length() / k : Math.round(s.length() / k) + 1;
        String[] output = new String[len];
        int i = 0;
        int j = 0;
        
        while (i < s.length()) {
            String currStr = "";
            
            if (i + k <= s.length()) {
                currStr = s.substring(i, i + k);
            } else {
                currStr = s.substring(i);
                currStr += String.valueOf(fill).repeat(k - currStr.length());
            }
            output[j] = currStr;
            i += k;
            j++;
        }
        
        return output;
    }
}
