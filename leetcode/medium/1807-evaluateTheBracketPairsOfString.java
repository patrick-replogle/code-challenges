// first pass solution
class Solution {
    public String evaluate(String s, List<List<String>> knowledge) {
        Map<String, String> map = new HashMap<>();
        StringBuilder sb = new StringBuilder();
        int i = 0;
        
        for (List<String> pair : knowledge) {
            map.put(pair.get(0), pair.get(1));
        }
        
        while (i < s.length()) {
            if (s.charAt(i) != '(') {
                sb.append(s.charAt(i));
            } else {
                i++;
                int j = i;
                while (s.charAt(j) !=')') {
                    j++;
                }
                String substring = s.substring(i, j);
                if (map.containsKey(substring)) {
                    sb.append(map.get(substring));
                } else {
                    sb.append('?');
                }
                i = j;
            }
            i++;
        }
        return sb.toString();
    }
}
