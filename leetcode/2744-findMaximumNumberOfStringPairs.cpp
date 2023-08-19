class Solution {
public:
    int maximumNumberOfStringPairs(vector<string>& words) {
        map<string, int> map;
        int output = 0;

        for (const auto &word: words) {
            string copy = word.c_str();
            sort(copy.begin(), copy.end());

            if (map.find(copy) != map.end()) {
                map[copy]++;
            } else {
                map[copy] = 1;
            }
        }

        for (const auto & [key, value]: map) {
            if (value % 2 == 0) output += value / 2;
        }

        return output;
    }
};
