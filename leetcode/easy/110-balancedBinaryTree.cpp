class Solution {
public:
    bool isBalanced(TreeNode* root) {
        if (root == nullptr) return true;
        if (root->left == nullptr && root->right == nullptr) return true;
        stack<TreeNode*> stack;
        stack.push(root);

        while (!stack.empty()) {
            TreeNode* curr = stack.top();
            stack.pop();

            if (curr == nullptr) continue;

            int left = findHeight(curr->left);
            int right = findHeight(curr->right);
            if (abs(left - right) > 1) return false;
            stack.push(curr->left);
            stack.push(curr->right);
        }

        return true;
    }

    int findHeight(TreeNode* root) {
        if (root == nullptr) return 0;

        return max(findHeight(root->left), findHeight(root->right)) + 1;
    }
};
