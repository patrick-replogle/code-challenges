class Solution {
    public int maxProfit(int[] prices) {
        int buyPrice = Integer.MAX_VALUE;
        int maxProfit = Integer.MIN_VALUE;
        
        for (int n : prices) {
            buyPrice = Math.min(n, buyPrice);
            maxProfit = Math.max(maxProfit, n - buyPrice);
        }
        return maxProfit;
    }
}
