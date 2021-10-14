// first pass solution
class Solution {
    public int minimumMoves(String s) {
        int i = 0;
        int moves = 0;
        
        while (i < s.length()) {
            if (s.charAt(i) == 'X') {
                moves++;
                i += 3;
            } else {
                i++;
            }
        }
        return moves;
    }
}
