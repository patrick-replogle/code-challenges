class Solution {
public:
    int splitNum(int num) {
        string num1 = "";
        string num2 = "";
        vector<int> vect;

        while (num > 0) {
            int digit = num % 10;
            vect.push_back(digit);
            num /= 10;
        }

        sort(vect.begin(), vect.end());

        for (int i = 0; i < vect.size(); i++) {
            if (i % 2 == 0) {
                num1 += to_string(vect[i]);
            } else {
                num2 += to_string(vect[i]);
            }
        }

        return stoi(num1) + stoi(num2);
    }
};
