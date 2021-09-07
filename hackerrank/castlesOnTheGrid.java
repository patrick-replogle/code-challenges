class Result {
    public static int minimumMoves(List<String> grid, int startX, int startY, int goalX, int goalY) {
      Queue<int[]> queue = new LinkedList<>();
      Set<String> visited = new HashSet<>();

      queue.add(new int[]{startX, startY, 0});

      while (!queue.isEmpty()) {
          int[] curr = queue.poll();
          int x = curr[0];
          int y = curr[1];
          int turns = curr[2];

          if (x == goalX && y == goalY) return turns;

          String key = x + ":" + y;

          if (!visited.contains(key)) {
              visited.add(key);

              for (int i = x; i < grid.size(); i++) {
                  if (grid.get(i).charAt(y) == 'X') break;
                  queue.add(new int[]{i, y, turns + 1});
              }
              for (int i = x; i >= 0; i--) {
                  if (grid.get(i).charAt(y) == 'X') break;
                  queue.add(new int[]{i, y, turns + 1});
              }

              for (int j = y; j < grid.get(0).length(); j++) {
                  if (grid.get(x).charAt(j) == 'X') break;
                  queue.add(new int[]{x, j, turns + 1});
              }

              for (int j = y; j >= 0; j--) {
                  if (grid.get(x).charAt(j) == 'X') break;
                  queue.add(new int[]{x, j, turns + 1});
              }
          }
      }
      return -1;
    }
}
