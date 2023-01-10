class Solution {
public:
    string addBinary(string a, string b) {
        string output;
        bool carry = false;
        int i = a.length() - 1;
        int j = b.length() - 1;

        while (i >= 0 || j >= 0 || carry) {
            char aChar = i >= 0 ? int(a[i] - '0') : 0;
            char bChar = j >= 0 ? int(b[j] - '0') : 0;
            int total = carry ? 1 + aChar + bChar : aChar + bChar;

            cout << total << endl;

            if (total == 3) {
                output = '1' + output;
            } else if (total == 2) {
                output = '0' + output;
            } else if (total == 1) {
                output = '1' + output;
            }  else {
                output = '0' + output;
            }

            carry = total >= 2 ? true : false;

            i--;
            j--;
        }

        return output;
    }
};
