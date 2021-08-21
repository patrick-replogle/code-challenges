// first pass solution
class Solution {
    public int shortestPathBinaryMatrix(int[][] grid) {
        LinkedList<List<Integer>> queue = new LinkedList<>();
        int[][] directions = { { -1, 0 }, { 1, 0 }, { 0, -1 }, { 0, 1 }, { 1, 1 }, { -1, -1 }, { -1, 1 }, { 1, -1 } };
        Set<String> visited = new HashSet<>();
        
        List<Integer> start = new ArrayList<>();
        start.add(0);
        start.add(0);
        start.add(1);
        
        queue.addFirst(start);
        
        while (queue.size() > 0) {
            List<Integer> curr = queue.removeFirst();
            int currRow = curr.get(0);
            int currCol = curr.get(1);
            int currCount = curr.get(2);
            
            if (grid[currRow][currCol] != 0) continue;
            
            if (currRow == grid.length - 1 && currCol == grid[0].length - 1) {
                return currCount;
            }
            
            String key = currRow + "-" + currCol;
            
            if (!visited.contains(key)) {
                visited.add(key);

                for (int[] move : directions) {
                    int nextRow = currRow + move[0];
                    int nextCol = currCol + move[1];
                    if (nextRow >= 0 && nextRow < grid.length && nextCol >= 0 && nextCol < grid[0].length) {
                        List<Integer> next = new ArrayList<>();
                        next.add(nextRow);
                        next.add(nextCol);
                        next.add(currCount + 1);
                        queue.addLast(next);
                    }
                } 
            }
        }      
        return -1;
    } 
}
