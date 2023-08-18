class Solution {
public:
    vector<string> splitWordsBySeparator(vector<string>& words, char separator) {
        vector<string> output;

        for (const auto &str: words) {
            int i = 0;
            string s = "";

            while (i < str.length()) {
                if (str[i] != separator) {
                    s += str[i];
                } else {
                    if (s.length()) output.push_back(s);
                    s = "";
                }
                i++;
            }
            if (s.length() > 0) output.push_back(s);
        }
        return output;
    }
};
