class Solution {
public:
    int vowelStrings(vector<string>& words, int left, int right) {
        set<char> vowels({ 'a', 'e', 'i', 'o', 'u' });
        int output = 0;

        for (int i = left; i <= right; i++) {
            int len = words[i].length();

            if (vowels.find(words[i][0]) != vowels.end() && 
            vowels.find(words[i][len-1]) != vowels.end()) {
                output++;
            }
        }

        return output;
    }
};
