// first pass solution
class Solution {
    public boolean areNumbersAscending(String s) {
        String[] arr = s.split(" ");
        int prev = -1;
        
        for (String currString : arr) {
            try {
                int num = Integer.parseInt(currString);
                if (num > prev) {
                    prev = num;
                } else {
                    return false;
                }
            } catch (NumberFormatException e) {
                continue;
            }
        }
        return true;
    }
}
