class Solution {
public:
    int minimizedStringLength(string s) {
        set<char> set;

        for (const auto c: s) {
            set.insert(c);
        }

        return set.size();
    }
};
