class Solution {
    public boolean checkDistances(String s, int[] distance) {
        HashSet<Character> seen = new HashSet<>();
        
        for (int i = 0; i < s.length(); i++) {
            char currChar = s.charAt(i);
            
            if (!seen.contains(currChar)) {
                int index = (int) currChar - 97;
                int nextIndex = i + distance[index] + 1;
                if (nextIndex > s.length() - 1 || s.charAt(nextIndex) != currChar) return false;
                seen.add(currChar);
            }
        }
        return true;
    }
}
