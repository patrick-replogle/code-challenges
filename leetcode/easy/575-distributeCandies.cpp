class Solution {
public:
    int distributeCandies(vector<int>& candyType) {
        int half = (int) candyType.size() / 2;
        set<int> set;

        for (const auto candy: candyType) {
            set.insert(candy);
        }
        return min<int>(half, set.size());
    }
};
