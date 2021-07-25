// first pass solution
class Solution {
    public String replaceDigits(String s) {
        String[] arr = s.split("");
        
        for (int i = 1; i < arr.length; i++) {
            if (i % 2 != 0) {
                int charCode = (int) s.charAt(i - 1) + Integer.parseInt(arr[i]);
                
                arr[i] = Character.toString(charCode);
            }
        }
        return String.join("", arr);
    }
}
