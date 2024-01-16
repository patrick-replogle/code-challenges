class Solution {
public:
    int maxFrequencyElements(vector<int>& nums) {
        map<int, int> count;
        int maxOcc = 0;
        int output = 0;

        for (const auto& num: nums) {
            count[num]++;
            maxOcc = max(maxOcc, count[num]);
        }

        for (const auto& num: nums) {
            if (count[num] == maxOcc) {
                output++;
            }
        }

        return output;
    }
};
