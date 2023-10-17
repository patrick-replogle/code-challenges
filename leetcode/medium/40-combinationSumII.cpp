class Solution {
public:
    vector<vector<int>> combinationSum2(vector<int>& candidates, int target) {
        vector<vector<int>> output;
        vector<int> currCombination;

        sort(candidates.begin(), candidates.end());

        findCombinations(candidates, output, currCombination, target, 0);

        return output;
    }

    void findCombinations(
        vector<int>& candidates, 
        vector<vector<int>>& output, 
        vector<int>& currCombination, 
        int target,
        int index) {
        
        if (target == 0) {
            output.push_back(currCombination);
            return;
        }
      
        for (int i = index; i < candidates.size(); i++) {
            if (target - candidates[i] >= 0) {
                currCombination.push_back(candidates[i]);
                findCombinations(
                    candidates, 
                    output, 
                    currCombination, 
                    target - candidates[i], 
                    i + 1);
                currCombination.pop_back();
                while (i + 1 < candidates.size() && candidates[i] == candidates[i+1]) i++;
            } 
        }
    }
};
