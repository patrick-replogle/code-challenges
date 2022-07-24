class Solution {
    public char repeatedCharacter(String s) {
        Map<Character, Integer> map = new HashMap<>();
        char output = 'a';
        
        for (int i = 0; i < s.length(); i++) {
            char c = s.charAt(i);
            map.put(c, map.getOrDefault(c, 0) + 1);
            
            if (map.get(c) == 2) {
                output = c;
                break;
            }
        }
        
        return output;
    }
}
