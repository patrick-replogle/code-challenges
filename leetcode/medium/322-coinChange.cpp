// BFS and sorting
class Solution {
public:
    int coinChange(vector<int>& coins, int amount) {
        if (amount == 0) return 0;

        sort(coins.begin(), coins.end()); 

        queue<vector<long>> q;
        set<long> seen;
        vector<long> start = {0, 0};

        q.push(start);

        while(!q.empty()) {
            vector<long> curr = q.front();
            long currAmount = curr[0];
            long numOfCoins = curr[1];

            q.pop();

            if (currAmount == amount) {
                return numOfCoins;
            }

            for (int i = coins.size() - 1; i >= 0; i--) {
                long sum = currAmount + coins[i];

                if (sum <= amount && seen.find(sum) == seen.end()) {
                    vector<long> next = {sum, numOfCoins + 1};
                    q.push(next);
                    seen.insert(sum);
                }
            }
        }

        return -1;
    }
};
