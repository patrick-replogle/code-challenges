// first pass solution
class Solution {
    public boolean makeEqual(String[] words) {
        int wordLen = words.length;
        Map<Character, Integer> charCount = new HashMap<>();
        
        for (String word : words) {
            for (int i = 0; i < word.length(); i++) {
                charCount.put(word.charAt(i), charCount.getOrDefault(word.charAt(i), 0) + 1);
            }
        }
        
        for (int value : charCount.values()) {
            if (value % wordLen != 0) {
                return false;
            }
        }
        
        return true;
    }
}
