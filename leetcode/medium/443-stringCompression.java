// first pass solution
class Solution {
    public int compress(char[] chars) {
        if (chars.length <= 1) return chars.length;
        
        char currChar = chars[0];
        int currCount = 1;
        int j = 0;
        
        for (int i = 1; i < chars.length; i++) {
            if (chars[i] == currChar) {
                currCount++;
            } else {
                j = insertCurrCharAndCount(currCount, currChar, j, chars);
                currChar = chars[i];
                currCount = 1;
            }
        }

        return insertCurrCharAndCount(currCount, currChar, j, chars); // add last charCount leftover at the end of the above loop
    }
    
    public int insertCurrCharAndCount(int currCount, char currChar, int j, char[] chars) {
        if (currCount == 1) {
            chars[j] = currChar;
            j++;
        } else {
            chars[j] = currChar;
            j++;
            String str = Integer.toString(currCount);

            for (int i = 0; i < str.length(); i++) {
                chars[j] = str.charAt(i);
                j++;
            }
        }
        return j; // always return the current position of j after adding chars 
    }
}
