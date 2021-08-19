// first pass solution
class Solution {
    public int countSubIslands(int[][] grid1, int[][] grid2) {
        int output = 0;
        List<List<Integer>> arr = new ArrayList<>();
        
        for (int i = 0; i < grid2.length; i++) {
            for (int j = 0; j < grid2[i].length; j++) {
                if (grid2[i][j] == 1) {
                    boolean[] flag = { true };
                    DFS(grid1, grid2, i, j, flag);
                    if (flag[0]) output++;
                }
            }
        }
        return output;
    }
    
    public void DFS(int[][] grid1, int[][] grid2, int i, int j, boolean[] flag) {
        if (i < 0 || i >= grid1.length || j < 0 || j >= grid1[0].length || grid2[i][j] != 1) return;
        
        grid2[i][j] = -1;
        if (grid1[i][j] != 1) flag[0] = false;
        
        DFS(grid1, grid2, i - 1, j, flag);
        DFS(grid1, grid2, i + 1, j, flag);
        DFS(grid1, grid2, i, j - 1, flag);
        DFS(grid1, grid2, i, j + 1, flag);
    }
}
