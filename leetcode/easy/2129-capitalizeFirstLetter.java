class Solution {
    public String capitalizeTitle(String title) {
        String[] arr = title.split(" ");
        StringBuilder sb = new StringBuilder();
        
        for (String word : arr) {
            if (word.length() <= 2) {
                sb.append(word.toLowerCase() + " ");
            } else {
                String prefix = word.substring(0, 1).toUpperCase();
                String postfix = word.substring(1).toLowerCase();
                sb.append(prefix + postfix + " ");
            }
        }
        
        return sb.toString().trim();
    }
}
