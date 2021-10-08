// first pass solution
class Solution {
    public int[] corpFlightBookings(int[][] bookings, int n) {
        int[] dp = new int[n];
        
        for (int[] booking : bookings) {
            int start = booking[0];
            int end = booking[1];
            int seats = booking[2];
            
            for (int i = start; i <= end; i++) {
                dp[i-1] += seats;
            }
        }
        return dp;
    }
}
