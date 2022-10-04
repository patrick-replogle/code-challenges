// first pass
class Solution {
    public boolean equalFrequency(String word) {
        int[] charCount = new int[26];
        
        for (char c : word.toCharArray()) {
            charCount[(int) c - 97]++;
        }
        
        for (int i = 0; i < 26; i++) {
            if (charCount[i] == 0) continue;
            int start = charCount[i] - 1;
            int curr = start > 0 ? start : Integer.MAX_VALUE;
            int diff = 0;
            
            for (int j = 0; j < 26; j++) {
                if (charCount[j] == 0 || j == i) continue;
                if (curr == Integer.MAX_VALUE) {
                    curr = charCount[j];
                } else if (charCount[j] != curr) {
                   diff++;
                   break;
                }
            }
            
            if (diff == 0) return true;
        }
    
        return false;
    }
}

// second pass 
class Solution {
    public boolean equalFrequency(String word) {
        int[] charCount = new int[26];
        List<Integer> arr = new ArrayList<>();
        
        for (char c : word.toCharArray()) {
            charCount[(int) c - 97]++;
        }
        
        for (int num : charCount) {
            if (num == 0) continue;
            arr.add(num);
        }
        
        for (int i = 0; i < arr.size(); i++) {
            int start = arr.get(i) - 1;
            int curr = start > 0 ? start : Integer.MAX_VALUE;
            int diff = 0;
            
            for (int j = 0; j < arr.size(); j++) {
                if (j == i) continue;
                if (curr == Integer.MAX_VALUE) {
                    curr = arr.get(j);
                } else if (arr.get(j) != curr) {
                    diff++;
                    break;
                }
            }
            
            if (diff == 0) return true;
        }
    
        return false;
    }
}
