class Solution {
    public List<List<Integer>> pacificAtlantic(int[][] heights) {
        boolean[][] atlantic = new boolean[heights.length][heights[0].length];
        boolean[][] pacific = new boolean[heights.length][heights[0].length];
        List<List<Integer>> output = new ArrayList<List<Integer>>();
        
        for (int j = 0; j < heights[0].length; j++) {
            DFS(heights, pacific, 0, j, -1);
            DFS(heights, atlantic, heights.length - 1, j, -1);
        }
        
        for (int i = 0; i < heights.length; i++) {
            DFS(heights, pacific, i, 0, -1);
            DFS(heights, atlantic, i, heights[0].length - 1, -1);
        }
        
        for (int i = 0; i < heights.length; i++) {
            for (int j = 0; j < heights[0].length; j++) {
                if (pacific[i][j] == true && atlantic[i][j] == true) {
                    ArrayList<Integer> curr = new ArrayList<>();
                    curr.add(i);
                    curr.add(j);
                    output.add(curr);
                }
            }
        }
        return output;
    }
    
    public void DFS(int[][] heights, boolean[][] ocean, int i, int j, int prev) {
        if (i < 0 || i > ocean.length - 1 || j < 0 || j > ocean[0].length - 1) {
            return;
        }
        if (ocean[i][j] == true || heights[i][j] < prev) {
            return;
        }
        
        ocean[i][j] = true;
        
        DFS(heights, ocean, i - 1, j, heights[i][j]);
        DFS(heights, ocean, i + 1, j, heights[i][j]);
        DFS(heights, ocean, i, j - 1, heights[i][j]);
        DFS(heights, ocean, i, j + 1, heights[i][j]);
    }
}
