// // first pass solution -> messy, but linear
class Solution {
    public int numDifferentIntegers(String word) {
        Set<String> uniqueIntegers = new HashSet<>();
        int i = 0;
        
        while (i < word.length()) {
            String currNum = "";
            
            while (i < word.length() && Character.isDigit(word.charAt(i))) {
                currNum += word.charAt(i);
                i++;
            }
            
            if (currNum.length() > 1) {
                int j = 0;
                while (j < currNum.length() - 1 && currNum.charAt(j) == '0') {
                    j++;
                }
                String subStr = currNum.substring(j);
                if (subStr.length() > 0) {
                    uniqueIntegers.add(subStr);
                }
            } 
            else if (currNum.length() == 1) {
                uniqueIntegers.add(currNum);
            }
            
            while (i < word.length() && !Character.isDigit(word.charAt(i))) i++;
        }
        return uniqueIntegers.size();
    }
}

// second pass solution
class Solution {
    public int numDifferentIntegers(String word) {
        String[] arr = word.split("[a-zA-Z]");
        Set<String> unique = new HashSet<>();
        
        for (String s : arr) {
            if (s.trim().length() == 0) continue;
            int j = 0;
            
            while (j < s.length() -1 && s.charAt(j) == '0') {
                j++;
            }
            unique.add(s.substring(j));
        }
        
        return unique.size();
    }
}
