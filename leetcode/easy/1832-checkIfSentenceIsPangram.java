// first pass solution
class Solution {
    public boolean checkIfPangram(String sentence) {
        int[] charCount = new int[26];
        
        for (int i = 0; i < sentence.length(); i++) {
            int index = (int) sentence.charAt(i) - 97;
            charCount[index] += 1;
        }
        
        for (int count : charCount) {
            if (count == 0) {
                return false;
            }
        }     
        return true;
    }
}

// second pass solution
class Solution {
    public boolean checkIfPangram(String sentence) {
        Set<Character> set = new HashSet<>();
        
        for (int i = 0; i < sentence.length(); i++) {
            set.add(sentence.charAt(i));
        }
        return set.size() == 26;
    } 
}

// third pass solution
class Solution {
    public boolean checkIfPangram(String sentence) {
        Set<String> set = new HashSet<>(Arrays.asList(sentence.split("")));
        
        return set.size() == 26;
    } 
}
