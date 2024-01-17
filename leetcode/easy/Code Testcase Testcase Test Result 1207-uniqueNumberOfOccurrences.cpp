class Solution {
public:
    bool uniqueOccurrences(vector<int>& arr) {
        map<int, int> count;
        set<int> seen;

        for (const auto& num: arr) {
            count[num]++;
        }

        for (const auto& keyVal: count) {
            int value = keyVal.second;

            if (seen.find(value) != seen.end()) {
                return false;
            }

            seen.insert(value);
        }

        return true;
    }
};
