class Solution {
public:
    bool containsNearbyDuplicate(vector<int>& nums, int k) {
        map<int, int> map;

        for (int i = 0; i < nums.size(); i++) {
            int num = nums[i];

            if (map.find(num) != map.end() && abs(map[num] - i) <= k) {
                return true;
            } 
            map[num] = i;
        }

        return false;
    }
};
