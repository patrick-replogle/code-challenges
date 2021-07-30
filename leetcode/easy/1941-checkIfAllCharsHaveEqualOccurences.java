// first pass solution
class Solution {
    public boolean areOccurrencesEqual(String s) {
        Map<Character, Integer> charCountMap = new HashMap<>();
        int countBaseline = 0;
        
        for (int i = 0; i < s.length(); i++) {
            charCountMap.put(s.charAt(i), charCountMap.getOrDefault(s.charAt(i), 0) + 1);
        }
        
        for (int count : charCountMap.values()) {
            if (countBaseline == 0) {
                countBaseline = count;
            } else {
                if (count != countBaseline) {
                    return false;
                }
            }
        }
        return true;
    }
}

// second pass solution
class Solution {
    public boolean areOccurrencesEqual(String s) {
        int[] charCount = new int[26];
        int baseline = 0;
        
        for (int i = 0; i < s.length(); i++) {
            int index = (int) s.charAt(i) - 97;
            charCount[index]++;
            baseline = charCount[index];
        }
        
        for (int i = 0; i < 26; i++) {
            if (charCount[i] != 0 && charCount[i] != baseline) {
                return false;
            }
        }
        return true;
    }
}
