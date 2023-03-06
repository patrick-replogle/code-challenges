class Solution {
public:
    int findTilt(TreeNode* root) {
        if (root == nullptr) return 0;

        int sum = 0;
        stack<TreeNode*> stack;
        stack.push(root);

        while (!stack.empty()) {
            TreeNode* curr = stack.top();
            stack.pop();

            sum += abs(findSum(curr->left) - findSum(curr->right));

            if (curr->left != nullptr) stack.push(curr->left);
            if (curr->right != nullptr) stack.push(curr->right);
        }

        return sum;
    }

    int findSum(TreeNode* root) {
        if (root == nullptr) return 0;

        return root->val + findSum(root->left) + findSum(root->right);
    }
};
