// first pass solution
class Solution {
    List<String> output = new ArrayList<>();
    
    public List<String> letterCombinations(String digits) {
        if (digits.length() == 0) return output;
        
        HashMap<Character, String[]> hashMap = new HashMap<>();
        
        hashMap.put('2', new String[] {"a", "b", "c"});
        hashMap.put('3', new String[] {"d", "e", "f"});
        hashMap.put('4', new String[] {"g", "h", "i"});
        hashMap.put('5', new String[] {"j", "k", "l"});
        hashMap.put('6', new String[] {"m", "n", "o"});
        hashMap.put('7', new String[] {"p", "q", "r", "s"});
        hashMap.put('8', new String[] {"t", "u", "v"});
        hashMap.put('9', new String[] {"w", "x", "y", "z"});
        
        helper(digits, hashMap, "", 0);
        
        return output;
    }
    
    public void helper(String digits, HashMap<Character, String[]> hashMap, String path, int start) {
        if (path.length() == digits.length()) {
            output.add(path);
            return;
        }
        
        for (String s : hashMap.get(digits.charAt(start))) {
            helper(digits, hashMap, path + s, start + 1);
        }
    }
}

// second pass solution
class Solution {
    List<String> output = new ArrayList<>();
    
    public List<String> letterCombinations(String digits) {
        if (digits.length() == 0) return output;
        
        String[] combos = new String[] { 
            "", "", "abc", "def", "ghi", "jkl", "mno", "pqrs" , "tuv", "wxyz" };
        
        helper(digits, combos, "", 0);
        
        return output;
    }
    
    public void helper(String digits, String[] combos, String path, int start) {
        if (path.length() == digits.length()) {
            output.add(path);
            return;
        }
        
        int index = Character.getNumericValue(digits.charAt(start));

        for (int i = 0; i < combos[index].length(); i++) {
            helper(digits, combos, path + combos[index].charAt(i), start + 1);
        }
    }
}
