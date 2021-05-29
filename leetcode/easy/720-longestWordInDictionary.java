class Solution {
    public String longestWord(String[] words) {
        HashSet<String> set = new HashSet<>();
        String output = "";
        Arrays.sort(words);
        
        for (String s : words) {
            String sub = "";
            set.add(s);
            
            for (int i = 0; i < s.length(); i++) {
                String currSub = s.substring(0, i + 1);
                if (set.contains(currSub)) {
                    sub = currSub;
                } else {
                    break;
                }
            }
            if (sub.length() > output.length()) {
                output = sub;
            } 
            else if (sub.length() == output.length() && sub.compareTo(output) < 0) {
                output = sub;
            }
        }
        return output;
    }
}
