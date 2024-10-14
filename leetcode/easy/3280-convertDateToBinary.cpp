class Solution {
public:
    string convertDateToBinary(string date) {
        string output = "";
        string curr = "";

        for (int i = 0; i < date.length(); i++) {
            char c = date[i];

            if (c == '-' && i < date.length() - 1) {
                string s = convertToBinary(curr);
                output += s;
                output += '-';
                curr = "";
            } else if (i == date.length() - 1) {
                string s = convertToBinary(curr + c);
                output += s;
            } else {
                curr += c;
            }
        }

        return output;
    }

    string convertToBinary(string s) {
        int num = stoi(s);
        string output = "";

        while (num > 0) {
            int bit = num & 1;
            output = char(bit + '0') + output;
            num >>= 1;
        }

        return output;
    }
};
