class Solution {
public:
    int addDigits(int num) {
        string s = to_string(num);
        int sum = 0;

        while (s.length() > 1) {
            for (int i = 0; i < s.length(); i++) {
                cout <<int(s[i] - 48);
                sum += int(s[i] - 48);
            }
            s = to_string(sum);
            sum = 0;
        }

       return stoi(s);
    }
};
