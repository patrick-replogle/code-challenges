// first pass solution
class Solution {
    List<String> output = new ArrayList<>();
    
    public List<String> letterCasePermutation(String s) {
        permute(s, "", 0);

        return output;
    }
    
    public void permute(String s, String curr, int index) {
        if (s.length() == curr.length()) {
            output.add(curr);
            return;
        }
        
        if (Character.isLetter(s.charAt(index))) {
            permute(s, curr + Character.toUpperCase(s.charAt(index)), index + 1);
            permute(s, curr + Character.toLowerCase(s.charAt(index)), index + 1); 
        } else {
            permute(s, curr + s.charAt(index), index + 1);
        }
    }
}

// second pass solution
class Solution {
    public List<String> letterCasePermutation(String s) {
        List<String> output = new ArrayList<>();
        
        LinkedList<String> stringList = new LinkedList<>();
        LinkedList<Integer> indexList = new LinkedList<>();
        
        indexList.addFirst(0);
        stringList.addFirst("");
        
        while (stringList.size() > 0) {
            String currStr = stringList.removeFirst();
            int currIdx = indexList.removeFirst();
            
            if (currStr.length() == s.length()) {
                output.add(currStr);
                continue;
            }
            
            if (Character.isDigit(s.charAt(currIdx))) {
                stringList.addLast(currStr + s.charAt(currIdx));
                indexList.addLast(currIdx + 1);
            } else {
                stringList.addLast(currStr + Character.toLowerCase(s.charAt(currIdx)));
                indexList.addLast(currIdx + 1);
                stringList.addLast(currStr + Character.toUpperCase(s.charAt(currIdx)));
                indexList.addLast(currIdx + 1);
            }
        }
        return output;
    }
}
