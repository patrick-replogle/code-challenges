// Given two strings s and t of lengths m and n respectively, return the minimum window in s which will contain all the characters in t. If there is no such window in s that covers all characters in t, return the empty string "".

// Note that If there is such a window, it is guaranteed that there will always be only one unique minimum window in s.

// Example 1:

// Input: s = "ADOBECODEBANC", t = "ABC"
// Output: "BANC"
// Example 2:

// Input: s = "a", t = "a"
// Output: "a"

// first pass solution
class Solution {
    public String minWindow(String s, String t) {
        HashMap<Character, Integer> tMap = new HashMap<>();
        HashMap<Character, Integer> currWindowMap = new HashMap<>();
        String output = "";
        int left = 0;
        int right = 0;
        
        buildHashTable(tMap, t); 
        
        while (right < s.length()) {
            char rightPointerChar = s.charAt(right);
            
            if (currWindowMap.containsKey(rightPointerChar)) {
                int count = currWindowMap.get(rightPointerChar);
                currWindowMap.put(rightPointerChar, count + 1);
            } else {
                currWindowMap.put(rightPointerChar, 1);
            }
            
            while (left <= right && isWindowValid(tMap, currWindowMap)) {
                if (output.length() == 0 || (right - left + 1) < output.length()) {
                    output = s.substring(left, right + 1);
                }
                char leftPointerChar = s.charAt(left);
                int count = currWindowMap.get(leftPointerChar);
                currWindowMap.put(leftPointerChar, count - 1);
                left++;
            }
            right++;
        }
        return output;
    }
    
    // === helper method to build hashMap to count chars in String t ===
    public void buildHashTable(HashMap<Character, Integer> hashMap, String t) {
        for (int i = 0; i < t.length(); i++) {
            char currChar = t.charAt(i);
            
            if (hashMap.containsKey(currChar)) {
                int count = hashMap.get(currChar);
                hashMap.put(currChar, count + 1);
            } else {
                hashMap.put(currChar, 1);
            }
        }
    }
    
    // === helper method to determine if current window contains all chars from s ===
    public boolean isWindowValid(HashMap<Character, Integer> tMap, HashMap<Character, Integer> currWindowMap) {
        for (char key : tMap.keySet()) {
            if (!currWindowMap.containsKey(key) || currWindowMap.get(key) < tMap.get(key)) {
                return false;
            }
        }
        return true;
    }
}
