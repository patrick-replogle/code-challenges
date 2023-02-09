class Solution {
public:
    int sumOfLeftLeaves(TreeNode* root) {
        return dft(root, false);
    }

    int dft(TreeNode* root, bool isLeftNode) {
        if (root == nullptr) return 0;
        if (root->left == nullptr && root->right == nullptr && isLeftNode) return root->val;

        return dft(root->left, true) + dft(root->right, false);
    }
};
