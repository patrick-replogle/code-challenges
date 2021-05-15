class Solution {
    public int romanToInt(String s) {
        int i = 0;
        int output = 0;
        
        HashMap<String, Integer> hashMap = new HashMap<>();
        hashMap.put("I", 1);
        hashMap.put("IV", 4);
        hashMap.put("V", 5);
        hashMap.put("IX", 9);
        hashMap.put("X", 10);
        hashMap.put("XL", 40);
        hashMap.put("L", 50);
        hashMap.put("XC", 90);
        hashMap.put("C", 100);
        hashMap.put("CD", 400);
        hashMap.put("D", 500);
        hashMap.put("CM", 900);
        hashMap.put("M", 1000);
        
        while (i < s.length()) {
            if (i < s.length() - 1) {
                String subStr = s.substring(i, i+2);
                if (hashMap.containsKey(subStr)) {
                    output += hashMap.get(subStr);
                    i += 2;
                } else {
                    output += hashMap.get(s.substring(i, i+1));
                    i++;
                }
            } else {
                output += hashMap.get(s.substring(i, i+1));
                i++;
            }
        }
        return output;
    }
}
