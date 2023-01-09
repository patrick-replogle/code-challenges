class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        std::map<int, int> map;
        vector<int> output;

        for (int i = 0; i < nums.size(); i++) {
            auto found = map.find(target - nums[i]);

            if (found != map.end()) {
                output.push_back(found->second);
                output.push_back(i);
                break;
            } 
            map[nums[i]] = i;
        }
        return output;
    }
};
