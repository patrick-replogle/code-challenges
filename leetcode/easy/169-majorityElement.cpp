class Solution {
public:
    int majorityElement(vector<int>& nums) {
        int n = nums.size() / 2 + 1;
        map<int, int> map;

        for (const auto& num: nums) {
            map[num]++;

            if (map.find(num)->second >= n) return num;
        }

        return -1;
    }
};
