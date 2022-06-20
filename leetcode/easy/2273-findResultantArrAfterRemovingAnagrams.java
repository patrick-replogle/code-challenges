// first pass solution
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

// second pass solution
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
            
            int[] arr1 = new int[26];
            int[] arr2 = new int[26];
            
            for (int j = 0; j < words[i].length(); j++) {
                int charCode1 = (int) words[i].charAt(j) - 97;
                int charCode2 = (int) words[i-1].charAt(j) - 97;
                
                arr1[charCode1]++;
                arr2[charCode2]++;
            }
            
            for (int j = 0; j < 26; j++) {
                if (arr1[j] != arr2[j]) {
                    output.add(words[i]);
                    break;
                }
            }
         }
        return output;
    }
}
