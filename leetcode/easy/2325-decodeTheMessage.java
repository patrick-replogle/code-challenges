class Solution {
    public String decodeMessage(String key, String message) {
        StringBuilder sb = new StringBuilder();
        Map<Character, Character> dict = new HashMap<>();
        char currVal = 'a';
        
        for (int i = 0; i < key.length(); i++) {
            char currKey = key.charAt(i);
            
            if (Character.isAlphabetic(currKey) && !dict.containsKey(currKey)) {
                dict.put(currKey, currVal);
                currVal += 1;
                if (dict.size() >= 26) break;
            }
        }
        
        for (int i = 0; i < message.length(); i++) {
            char currChar = message.charAt(i);
            
            if (dict.containsKey(currChar)) {
                sb.append(dict.get(currChar));
            } else {
                sb.append(currChar);
            }
        }
        
        return sb.toString();
    }
}
