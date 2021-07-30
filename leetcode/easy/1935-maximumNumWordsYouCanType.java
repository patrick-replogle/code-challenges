// first pass solution
class Solution {
    public int canBeTypedWords(String text, String brokenLetters) {
        Set<String> letters = new HashSet<>(Arrays.asList(brokenLetters.split("")));
        int count = 0;
        
        for (String word : text.split(" ")) {
            boolean flag = true;
            for (int i = 0; i < word.length(); i++) {
                if (letters.contains(word.substring(i, i+1))) {
                    flag = false;
                    break;
                }
            }
            if (flag) count++;
        }
        
        return count;
    }
}
