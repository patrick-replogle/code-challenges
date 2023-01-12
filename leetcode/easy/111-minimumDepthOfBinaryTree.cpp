class Solution {
public:
    int minDepth(TreeNode* root) {
        if (root == nullptr) return 0;

        return helper(root, 1);
    }
    int helper(TreeNode* root, int depth) {
        if (root == nullptr) return INT_MAX;
        if (root->left == nullptr && root->right == nullptr) return depth;

        int left = helper(root->left, depth + 1);
        int right = helper(root->right, depth + 1);

        return min(left, right);
    }
};
