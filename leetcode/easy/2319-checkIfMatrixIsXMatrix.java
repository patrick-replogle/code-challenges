class Solution {
    public boolean checkXMatrix(int[][] grid) {
        int start = 0;
        int end = grid.length - 1;
        int n = grid.length;
        
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                if (grid[i][start] == 0 || grid[i][end] == 0) return false;
                if (j != start && j != end && grid[i][j] != 0) return false;
            }
            start++;
            end--;
        }
        return true;
    }
}
