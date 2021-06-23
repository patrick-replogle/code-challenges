class Solution {
    public String longestCommonPrefix(String[] strs) {
        Arrays.sort(strs, (s1, s2) -> s1.length() - s2.length());
        
        String prefix = strs[0];
        
        for (int i = 1; i < strs.length; i++) {
            if (!strs[i].startsWith(prefix)) {
                while (prefix.length() > 0 && !strs[i].startsWith(prefix)) {
                    prefix = prefix.substring(0, prefix.length() - 1);
                }
            }
        }
        return prefix;
    }
}
