class Solution {
    public int rearrangeCharacters(String s, String target) {
        Map<Character, Integer> map1 = new HashMap<>();
        Map<Character, Integer> map2 = new HashMap<>();
        int output = 0;
        boolean flag = true;
        
        for (int i = 0; i < target.length(); i++) {
            map1.put(target.charAt(i), map1.getOrDefault(target.charAt(i), 0) + 1);
        }
        
        for (int i = 0; i < s.length(); i++) {
            if (map1.containsKey(s.charAt(i))) {
                map2.put(s.charAt(i), map2.getOrDefault(s.charAt(i), 0) + 1);
            }
        }
        
        while (flag) {
            for (int i = 0; i < target.length(); i++) {
                char currChar = target.charAt(i);
                if (!map2.containsKey(currChar) || map2.get(currChar) - 1 < 0) {
                    flag = false;
                    break;
                }
                int next = map2.get(currChar) - 1;
                map2.put(currChar, next);
            }
            
            if (flag) output++;
            else break;
        }
        
        return output;
    }
}
