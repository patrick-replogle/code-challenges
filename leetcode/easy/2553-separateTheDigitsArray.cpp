class Solution {
public:
    vector<int> separateDigits(vector<int>& nums) {
        vector<int> output;

        for (const auto num: nums) {
            string s = to_string(num);
            for (auto c: s) {
                output.push_back((int)c - '0');
            }
        }

        return output;
    }
};
