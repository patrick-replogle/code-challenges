// first pass solution
class Solution {
    public boolean squareIsWhite(String coordinates) {
        Set<Character> oddChars = new HashSet(Arrays.asList('a', 'c', 'e', 'g'));
        
        boolean isNumOdd = Character.getNumericValue(coordinates.charAt(1)) % 2 != 0;
        boolean isCharOdd = oddChars.contains(coordinates.charAt(0));
        
        if ((isNumOdd && isCharOdd) || (!isNumOdd && !isCharOdd)) {
            return false;
        } else if ((isNumOdd && !isCharOdd) || (!isNumOdd && isCharOdd)) {
            return true;
        } 
        return false;
    }
}

// second pass solution
class Solution {
    public boolean squareIsWhite(String coordinates) {
        int charValue = (int) coordinates.charAt(0) - 96;
        int numValue = Character.getNumericValue(coordinates.charAt(1));
        
        if (numValue % 2 == 0) {
            if (charValue % 2 == 0) {
                return false;
            } else {
                return true;
            }
        } else {
            if (charValue % 2 == 0) {
                return true;
            } else {
                return false;
            }
        }
    }
}
