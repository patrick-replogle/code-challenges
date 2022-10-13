class Solution {
    public int hardestWorker(int n, int[][] logs) {
        int id = logs[0][0];
        int time = logs[0][1];
        
        for (int i = 1; i < logs.length; i++) {
            int currTime = logs[i][1] - logs[i-1][1];
            
            if (currTime > time) {
                id = logs[i][0];
                time = currTime;
            }
            else if (currTime == time) {
                id = Math.min(id, logs[i][0]);
            }
        }
        return id;
    }
}
