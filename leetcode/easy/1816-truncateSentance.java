// first pass solution
class Solution {
    public String truncateSentence(String s, int k) {
        List<String> arr = new ArrayList<>(Arrays.asList(s.split(" ")));
        
        while (arr.size() > k) {
            arr.remove(arr.size() - 1);
        }
        
        return String.join(" ", arr);
    }
}

// second pass solution
class Solution {
    public String truncateSentence(String s, int k) {
        String[] strArr = s.split(" ");
        String output = "";
        
        for (int i = 0; i < k; i++) {
            output += strArr[i] + " ";
        }
        
        return output.trim();
    }
}

// third pass solution
class Solution {
    public String truncateSentence(String s, int k) {
        String[] strArr = s.split(" ");
        StringBuilder output = new StringBuilder();
        
        for (int i = 0; i < k; i++) {
            output.append(strArr[i] + " ");
        }
        
        return output.toString().trim();
    }
}
