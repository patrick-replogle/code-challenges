// first pass solution
class Solution {
    public String getHint(String secret, String guess) {
        Map<Character, Integer> secretChars = new HashMap<>();
        Set<Integer> bulls = new HashSet<>();
        int cows = 0;
        
        for (int i = 0; i < secret.length(); i++) {
            char sChar = secret.charAt(i);
            char gChar = guess.charAt(i);
            secretChars.put(sChar, secretChars.getOrDefault(sChar, 0) + 1);
            
            if (gChar == sChar) {
                bulls.add(i);
                secretChars.put(sChar, secretChars.get(sChar) - 1);
            }
        }
        
        for (int i = 0; i < guess.length(); i++) {
            char c = guess.charAt(i);
            
            if (secretChars.containsKey(c) && secretChars.get(c) > 0 && !bulls.contains(i)) {
                secretChars.put(c, secretChars.get(c) - 1);
                cows++;
            }
        }
        return bulls.size() + "A" + cows + "B";
    }
}
