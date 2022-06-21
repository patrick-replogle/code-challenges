class Solution {
    public boolean strongPasswordCheckerII(String password) {
        if (password.length() < 8) return false;
        
        boolean upperCaseChar = false;
        boolean lowerCaseChar = false;
        boolean digit = false;
        boolean specialChar = false;
        String specialChars = "!@#$%^&*()-+";
        
        for (int i = 0; i < password.length(); i++) {
            char currChar = password.charAt(i);
            
            if (i > 0 && currChar == password.charAt(i-1)) return false;
            
            if (Character.isLetterOrDigit(currChar) == false) {
                if (specialChars.indexOf(String.valueOf(currChar)) > -1) {
                    specialChar = true; 
                } else {
                    return false;
                }
                
            } else {
                if (Character.isDigit(currChar)) {
                    digit = true;
                    continue;
                }
                if (currChar == Character.toLowerCase(currChar)) lowerCaseChar = true;
                if (currChar == Character.toUpperCase(currChar)) upperCaseChar = true;
            }
        }
        
        return upperCaseChar && lowerCaseChar && digit && specialChar;
    }
}
