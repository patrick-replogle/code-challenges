class Solution {
    public boolean digitCount(String num) {
        int[] count = new int[10];
        
        for (int i = 0; i < num.length(); i++) {
            int index = Character.getNumericValue(num.charAt(i));
            count[index]++;
        }
        
        for (int i = 0; i < num.length(); i++) {
             int index = Character.getNumericValue(num.charAt(i));
             if (count[i] != index) {
                 return false;
             }
        }
        
        return true;
    }
}
