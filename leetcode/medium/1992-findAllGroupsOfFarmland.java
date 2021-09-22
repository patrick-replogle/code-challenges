// first pass solution
class Solution {
    public int[][] findFarmland(int[][] land) {
        List<int[]> arr = new ArrayList<>();
        
        for (int i = 0; i < land.length; i++) {
            for (int j = 0; j < land[0].length; j++) {
                if (land[i][j] == 1) {
                    DFS(land, i, j);
                    arr.add(getGroup(land, i, j));
                }
            }
        }
        
        int[][] output = new int[arr.size()][4];
        
        for (int i = 0; i < arr.size(); i++) {
            output[i] = arr.get(i);
        }
        return output;
    }
    
    public void DFS(int[][] land, int i, int j) {
        if (i < 0 || i >= land.length || j < 0 || j >= land[0].length) return;
        if (land[i][j] != 1) return;
        
        land[i][j] = -1;
        
        DFS(land, i-1, j);
        DFS(land, i+1, j);
        DFS(land, i, j-1);
        DFS(land, i, j+1);
    }
  
    public int[] getGroup(int[][] land, int i, int j) {
        int[] output = new int[4];
        output[0] = i;
        output[1] = j;
        
        while (j < land[0].length && land[i][j] == -1) j++;
        while (i < land.length && land[i][j-1] == -1) i++;
        
        output[2] = i - 1;
        output[3] = j - 1;
        
        return output;
    }
}
