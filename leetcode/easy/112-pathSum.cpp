class Solution {
public:
    bool hasPathSum(TreeNode* root, int targetSum) {
        if (root == nullptr) return false;

        bool output = false;
        dfs(root, targetSum, 0, output);
        return output;
    }

    void dfs(TreeNode* root, int targetSum, int currSum, bool& output) {
        if (root == nullptr || output) return;

        currSum += root->val;
        
        if (root->left == nullptr && root->right == nullptr && currSum == targetSum) {
            cout << currSum;
            output = true;
        }
        dfs(root->left, targetSum, currSum, output);
        dfs(root->right, targetSum, currSum, output);
    }
};
