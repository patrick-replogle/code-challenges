class Result {
    public static List<String> bomberMan(int n, List<String> grid) {
        if (n <= 1) return grid;
        
        int row = grid.size();
        int col = grid.get(0).length();
        char[][] arr = new char[row][col];
        List<int[]> bombs = new ArrayList<>();   
        int m = 2;
        
        while (m <= 9) {
            if (m % 2 == 0) {
                bombs.clear();
                findBombs(bombs, row, col, grid);
                addBombs(arr, row, col);
            } else {
                detonate(bombs, arr, row, col); 
            }
            copy(grid, arr); 
            if (m == n) return grid;
            else if (m == 7 && n % 4 == 3) return grid;
            else if (m == 9 && n % 4 != 3) return grid;
            else if (m == 2 && n % 2 == 0) return grid;
            m++;
        }
        return grid;
    }
    
    public static void copy(List<String> grid, char[][] arr ) {
        for (int i = 0; i < grid.size(); i++) {
            grid.set(i, new String(arr[i]));
        }
    }
    
    public static void detonate(List<int[]> bombs, char[][] arr, int row, int col) {
        for (int[] bomb : bombs) {
            int i = bomb[0];
            int j = bomb[1];
            arr[i][j] = '.';
            if (i - 1 >= 0) arr[i-1][j] = '.';
            if (i + 1 < row) arr[i+1][j] = '.';
            if (j - 1 >= 0) arr[i][j-1] = '.';
            if (j + 1 < col) arr[i][j+1] = '.';
        }
    }
    
    public static void addBombs(char[][] arr, int row, int col) {
        for (int i = 0; i < row; i++) {
            for (int j = 0; j < col; j++) {
                arr[i][j] = 'O';
            }
        }  
    }
    
    public static void findBombs(List<int[]> bombs, int row, int col, List<String> grid) {
        for (int i = 0; i < row; i++) {
            for (int j = 0; j < col; j++) {
                if (grid.get(i).charAt(j) == 'O') {
                    bombs.add(new int[]{i, j});
                }
            }
        }
    }
}
