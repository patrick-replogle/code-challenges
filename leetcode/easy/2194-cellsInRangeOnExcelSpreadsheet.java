class Solution {
    public List<String> cellsInRange(String s) {
        List<String> output = new ArrayList<>();
        int currRow = Integer.parseInt(String.valueOf(s.charAt(1)));
        int endRow = Integer.parseInt(String.valueOf(s.charAt(4)));
        char currCol = s.charAt(0);
        char endCol = s.charAt(3);
        
        
        while (currCol <= endCol) {
            output.add(""+ currCol + currRow);
            currRow += 1;
            
            if (currRow > endRow){ 
                currRow = Integer.parseInt(String.valueOf(s.charAt(1)));
                currCol += 1;
            }
        }
        
        return output;
    }
}
