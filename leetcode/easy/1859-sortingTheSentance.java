// first pass solution
class Solution {
    public String sortSentence(String s) {
        StringBuilder sb = new StringBuilder();
        Map<Integer, String> map = new HashMap<>();
        String[] arr = s.split(" ");
        
        for (int i = 0; i < arr.length; i++) {
            int key = Character.getNumericValue(arr[i].charAt(arr[i].length() - 1));
            String value = arr[i].substring(0, arr[i].length() - 1);
            map.put(key, value);
        }
        
        for (int i = 1; i <= 9; i++) {
            if (!map.containsKey(i)) break;
            sb.append(map.get(i) + " ");
        }
        
        return sb.toString().trim();
    }
}
