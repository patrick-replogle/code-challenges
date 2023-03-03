class Solution {
public:
    int diameterOfBinaryTree(TreeNode* root) {
        int diam = 0;

        traverse(root, diam);

        return diam;
    }

    int traverse(TreeNode* root, int& diam) {
        if (root == nullptr) return 0;

        int left = traverse(root->left, diam);
        int right = traverse(root->right, diam);

        diam = max(diam, left + right);

        return max(left, right) + 1;
    }
};
