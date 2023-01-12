class Solution {
public:
    int maxDepth(TreeNode* root) {
        if (root == nullptr) return 0;

        return max(1 + maxDepth(root->left), 1 + maxDepth(root->right));
    }
};
