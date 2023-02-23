class Solution {
public:
    vector<string> findRelativeRanks(vector<int>& score) {
        vector<int> score_copy(score);
        map<int, int> map;
        vector<string> output;

        sort(score_copy.begin(), score_copy.end(), greater<int>());

        for (int i = 0; i < score_copy.size(); i++) {
            map[score_copy[i]] = i + 1;
        }

        for (const auto num: score) {
            auto it = map.find(num);
            if (it->second == 1) output.push_back("Gold Medal");
            if (it->second == 2) output.push_back("Silver Medal");
            if (it->second == 3) output.push_back("Bronze Medal");
            if (it-> second > 3) output.push_back(to_string(it->second));
        }

        return output;
    }
};
