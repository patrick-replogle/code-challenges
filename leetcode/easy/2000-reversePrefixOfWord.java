class Solution {
    public String reversePrefix(String word, char ch) {
        StringBuilder sb = new StringBuilder();
        int index = word.indexOf(ch);
        
        for (int i = index; i >= 0; i--) {
            sb.append(word.charAt(i));
        }
        
        for (int i = index + 1; i < word.length(); i++) {
            sb.append(word.charAt(i));
        }
        
        return sb.toString();
    }
}
