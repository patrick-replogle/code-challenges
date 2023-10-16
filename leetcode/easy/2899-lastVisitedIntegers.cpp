class Solution {
public:
    vector<int> lastVisitedIntegers(vector<string>& words) {
        vector<int> reverse;
        vector<int> output;
        int prevCount = 0;

        for (const auto& word: words) {
            if (word == "prev") {
                prevCount++;
                int i = reverse.size() - prevCount;

                if (i < 0) {
                    output.push_back(-1);
                } else {
                    output.push_back(reverse[i]);
                }
            } else {
                prevCount = 0;
                int num = stoi(word);
                reverse.push_back(num);
            }
        }

        return output;
    }
};
