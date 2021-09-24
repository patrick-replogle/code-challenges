// first pass solution
class Solution {
    public List<String> printVertically(String s) {
        String[] arr = s.split(" ");
        List<String> output = new ArrayList<>();
        int max = 0;
        
        for (String str : arr) {
            max = Math.max(str.length(), max);
        }
        
        for(int j = 0; j < max; j++) {
            StringBuilder sb = new StringBuilder();
            
            for (int i = 0; i < arr.length; i++) {
                if (j < arr[i].length()) {
                    sb.append(arr[i].charAt(j));
                } else {
                    sb.append(" ");
                }
            }
            
            while (sb.charAt(sb.length() - 1) == ' ') {
                sb.deleteCharAt(sb.length() - 1);
            }
            output.add(sb.toString());
        }
        return output;
    }
}
