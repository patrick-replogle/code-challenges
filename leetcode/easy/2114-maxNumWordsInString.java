// first pass solution
class Solution {
    public int mostWordsFound(String[] sentences) {
        int output = 0;
        
        for (String sentence : sentences) {
            int strLen = sentence.split(" ").length;
            
            output = Math.max(output, strLen);
        }
        
        return output;
    }
}

// second pass solution
class Solution {
    public int mostWordsFound(String[] sentences) {
        int output = 0;
        
        for (String sentence : sentences) {
            int curr = 1;
            for (int i = 0; i < sentence.length(); i++) {
                if (sentence.charAt(i) == ' ') {
                    curr++;
                }
            }
            
            output = Math.max(output, curr);
        }
        
        return output;
    }
}
