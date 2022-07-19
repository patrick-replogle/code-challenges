class Solution {
    public int countVowelSubstrings(String word) {
        int output = 0;
        Set<Character> vowels = new HashSet<>(Arrays.asList('a', 'e', 'i', 'o', 'u'));
        
        for (int i = 0; i < word.length(); i++) {
            boolean flag = true;
            Set<Character> vowelCount = new HashSet<>();
            
            for (int j = i ; j < word.length(); j++) {
                char currChar = word.charAt(j);
                if (!vowels.contains(currChar)) {
                    flag = false;
                    break;
                }
                vowelCount.add(currChar);
                if (flag && vowelCount.size() == 5) output++;
            }
        }
        
        return output;
    }
}
