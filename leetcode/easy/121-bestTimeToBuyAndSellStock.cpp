class Solution {
public:
    int maxProfit(vector<int>& prices) {
        int buyPrice = prices[0];
        int currProfit = INT_MIN;
        int maxProfit = INT_MIN;

        for (int i = 1; i < prices.size(); i++) {
            currProfit = max(currProfit, prices[i] - buyPrice);
            maxProfit = max(maxProfit, currProfit);
            buyPrice = min(buyPrice, prices[i]);
        }
        return maxProfit < 0 ? 0 : maxProfit;
    }
};
