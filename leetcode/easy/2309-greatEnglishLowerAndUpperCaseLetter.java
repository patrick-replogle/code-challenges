class Solution {
    public String greatestLetter(String s) {
        char[][] array = new char[26][2];
        
        for (int i = 0; i < s.length(); i++) {
            char currChar = Character.toLowerCase(s.charAt(i));
            boolean isLowerCase = currChar == s.charAt(i);
            int index = (int) currChar - 97;
            
            array[index][isLowerCase ? 0 : 1] = s.charAt(i);
        }
        
        for (int i = 25; i >= 0; i--) {
            if (array[i][0] != '\u0000' && array[i][1] != '\u0000') {
                return String.valueOf(array[i][1]);
            }
        }
        
        return "";
    }
}
