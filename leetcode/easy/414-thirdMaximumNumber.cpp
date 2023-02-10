class Solution {
public:
    int thirdMax(vector<int>& nums) {
        set<int> set;
        priority_queue<int> pq;

        for (const auto num : nums) {
            if (set.find(num) == set.end()) {
                pq.push(num);
            }
            set.insert(num);
        }

        if (set.size() >= 3) {
            for (int i = 0; i < 2; i++) {
                pq.pop();
            }
            return pq.top();
        }
        return pq.top();
    }
};
