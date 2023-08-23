class Solution {
public:
    int buyChoco(vector<int>& prices, int money) {
        if (prices.size() < 2) return money;

        sort(prices.begin(), prices.end());
        int lowestSum = money - (prices[0] + prices[1]);
    
        return lowestSum >= 0 ? lowestSum : money;
    }
};
