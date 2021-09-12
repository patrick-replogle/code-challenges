// first pass solution
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

// second pass solution
class Solution {
    public String reversePrefix(String word, char ch) {
        int index = word.indexOf(ch);
        StringBuilder sb = new StringBuilder(word.substring(0, index + 1));

        return sb.reverse().toString() + word.substring(index + 1);
    }
}
