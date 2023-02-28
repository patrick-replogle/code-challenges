class Solution {
public:
    int getMinimumDifference(TreeNode* root) {
        if (root == nullptr) return -1;

        int minDiff = INT_MAX;
        vector<int> vect;

        inorderTraversal(root, vect);

        for (int i = 1; i < vect.size(); i++) {
            minDiff = min(minDiff, vect[i] - vect[i-1]);
        }

        return minDiff;
    }

    void inorderTraversal(TreeNode* root, vector<int>& vect) {
        if (root == nullptr) return;

        inorderTraversal(root->left, vect);
        vect.push_back(root->val);
        inorderTraversal(root->right, vect);
    }
};
