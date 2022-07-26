class Solution {
    public int[][] spiralMatrix(int m, int n, ListNode head) {
        int[][] output = new int[m][n];
        int startRow = 0;
        int startCol = 0;
        int endRow = m - 1;
        int endCol = n - 1;
        
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                output[i][j] = -1;
            }
        }
        
        while (head != null) {
            for (int j = startCol; j <= endCol; j++) {
                if (head != null) {
                    output[startRow][j] = head.val;
                    head = head.next;
                } 
            }
            startRow++;
            
            for (int i = startRow; i <= endRow; i++) {
                if (head != null) {
                    output[i][endCol] = head.val;
                    head = head.next;
                } 
            }
            
            endCol--;
            
            for (int j = endCol; j >= startCol; j--) {
                if (head != null) {
                    output[endRow][j] = head.val;
                    head = head.next;
                }
            }
            endRow--;
            
            for (int i = endRow; i >= startRow; i--) {
                if (head != null) {
                    output[i][startCol] = head.val;
                    head = head.next;
                } 
            }
            startCol++;
        }
        
        return output;
    } 
}
