class Solution {
public:
    int maxSum(vector<int>& nums) {
        int output = -1;
        map<int, vector<int>> map;

        for (const auto &num1: nums) {
            int currMaxDigit = -1;
            int n = num1;

            while (n > 0) {
                int digit = n % 10;
                currMaxDigit = max(digit, currMaxDigit);
                n /= 10;
            }

            if (map.find(currMaxDigit) != map.end()) {
                for (const auto &num2: map[currMaxDigit]) {
                    output = max(num1 + num2, output);
                }
            } else {
                vector<int> vect;
                map[currMaxDigit] = vect;
            }
             map[currMaxDigit].push_back(num1);
        }

        return output;
    }
};
