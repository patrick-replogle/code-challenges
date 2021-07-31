// first pass solution
class Solution {
    public int getLucky(String s, int k) {
        StringBuilder sb = new StringBuilder();
        
        for (int i = 0; i < s.length(); i++) {
            sb.append((int) s.charAt(i) - 96);
        }
        
        String output = sb.toString();
        
        while (k > 0) {
            int sum = 0;
            for (int i = 0; i < output.length(); i++) {
                sum += Character.getNumericValue(output.charAt(i));
            }
            output = sum + "";
            k--;
        }
        
        return Integer.parseInt(output);
    }
}
