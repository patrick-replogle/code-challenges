// first pass solution
class Solution {
    public int countAsterisks(String s) {
        String[] arr = s.split("\\|");
        int output = 0;
        
        for (int i = 0; i < arr.length; i += 2) {
            for (int j = 0; j < arr[i].length(); j++) {
                if (arr[i].charAt(j) == '*') output++;
            }
        }
        return output;
    }
}

// second pass solution
class Solution {
    public int countAsterisks(String s) {
        int output = 0;
        int pipeCount = 0;
        
        for (int i = 0; i < s.length(); i++) {
            if (s.charAt(i) == '|') pipeCount++;
            if (pipeCount % 2 == 0 && s.charAt(i) == '*') output++;
        }
        return output;
    }
}
