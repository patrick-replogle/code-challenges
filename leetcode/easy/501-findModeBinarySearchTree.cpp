class Solution {
public:
    vector<int> findMode(TreeNode* root) {
        map<int, int> map;
        vector<int> output;
        int max_key = INT_MIN;
        int max_count = INT_MIN;

        traverse(root, map);

        for (const auto entry: map) {
            if (entry.second > max_count) {
                max_key = entry.first;
                max_count = entry.second;
            }
        }

        for (const auto entry: map) {
            if (entry.second == max_count) {
                output.push_back(entry.first);
            }
        }

        return output;
    }

    void traverse(TreeNode* root, map<int, int>& map) {
        if (root == nullptr) return;

        map[root->val]++;

        traverse(root->left, map);
        traverse(root->right, map);
    }
};
