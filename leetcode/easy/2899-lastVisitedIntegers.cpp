/** solution 1 */
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

/** solution 2 */
class Solution {
public:
    vector<int> lastVisitedIntegers(vector<string>& words) {
        vector<int> output;
        vector<int> nums;
        int i = 0;

        while (i < words.size()) {
            if (words[i].compare("prev") != 0) {
                int num = stoi(words[i]);
                nums.push_back(num);
                i++;
                continue;
            } 

            int j = nums.size() - 1;
            int prevCount = 0;

            while (i < words.size() && words[i].compare("prev") == 0) {
                prevCount++;
                i++;
            }
            
            while (prevCount > 0) {
                if (j >= 0) output.push_back(nums[j]);
                else output.push_back(-1);
                j--;
                prevCount--;
            }
        }

        return output;
    }
};

