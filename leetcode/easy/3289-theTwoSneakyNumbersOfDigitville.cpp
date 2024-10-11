class Solution {
public:
    vector<int> getSneakyNumbers(vector<int>& nums) {
        vector<int> output;
        map<int, int> numCount;

        for (const auto& num: nums) {
            if (numCount.find(num) == numCount.end()) {
                numCount[num] = 0;
            }
            numCount[num]++;

            if (numCount[num] > 1) {
                output.push_back(num);
            }
        }

        return output;
    }
};
