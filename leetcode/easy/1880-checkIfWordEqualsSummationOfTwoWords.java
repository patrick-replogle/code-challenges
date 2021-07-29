// first pass solution
class Solution {
    public boolean isSumEqual(String firstWord, String secondWord, String targetWord) {
        String firstWordValue = covertCharStringToNumericalString(firstWord);
        String secondWordValue = covertCharStringToNumericalString(secondWord);
        String targetWordValue = covertCharStringToNumericalString(targetWord);

        return Integer.parseInt(firstWordValue) + Integer.parseInt(secondWordValue) == Integer.parseInt(targetWordValue);
    }
    public String covertCharStringToNumericalString(String s) {
        String output = "";
        
        for (int i = 0; i < s.length(); i++) {
            output += ((int) s.charAt(i)) - 97;
        }
        return output;
    } 
}
