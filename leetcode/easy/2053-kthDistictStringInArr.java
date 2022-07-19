class Solution {
    public String kthDistinct(String[] arr, int k) {
        Map<String, Integer> dict = new HashMap<>();
        int count = 0;
        
        for (String s : arr) {
            dict.put(s, dict.getOrDefault(s, 0) + 1);
        }
        
        for (String s: arr) {
            if (dict.get(s) == 1) {
                count++;
            }
            if (count == k) return s;
        }
        
        return "";
    }
}
