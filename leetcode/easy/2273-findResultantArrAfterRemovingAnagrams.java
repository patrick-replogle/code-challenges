class Solution {
    public List<String> removeAnagrams(String[] words) {
        if (words.length == 0) return new ArrayList<String>();
        
        List<String> output = new ArrayList<>();
        output.add(words[0]);

        for (int i = 1; i < words.length; i++) {
            if (words[i].length() != words[i-1].length()) {
                output.add(words[i]);
                continue;
            }
            
            char[] arr1 = words[i].toCharArray();
            char[] arr2 = words[i-1].toCharArray();
            Arrays.sort(arr1);
            Arrays.sort(arr2);
            
            if (!String.valueOf(arr1).equals(String.valueOf(arr2))) {
                output.add(words[i]);
            }
         }
        
        return output;
    }
}
