// recursive DFS
class Solution {
public:
    bool isSymmetric(TreeNode* root) {
        if (root == nullptr) return true;

        return traverse(root->left, root->right);
    }
    bool traverse(TreeNode* left, TreeNode* right) {
        if (left == nullptr && right == nullptr) return true;
        if (left == nullptr || right == nullptr) return false;
        if (left->val != right->val) return false;


        return traverse(left->left, right->right) && traverse(left->right, right->left);
    }
};

// iterative with DFS
class Solution {
public:
    bool isSymmetric(TreeNode* root) {
        if (root == nullptr) return true;

        stack<TreeNode*> stack1;
        stack<TreeNode*> stack2;
        stack1.push(root->left);
        stack2.push(root->right);

        while (!stack1.empty() && !stack2.empty()) {
            TreeNode* top1 = stack1.top();
            TreeNode* top2 = stack2.top();

            if (top1 == nullptr && top2 == nullptr) {
                stack1.pop();
                stack2.pop();
                continue;
            }
            if (top1 == nullptr || top2 == nullptr) return false;
            if (top1->val != top2->val) return false;

            stack1.pop();
            stack2.pop();

            stack1.push(top1->left);
            stack2.push(top2->right);
            stack1.push(top1->right);
            stack2.push(top2->left);
        }
        return true;
    }
};

// iterative BFS
class Solution {
public:
    bool isSymmetric(TreeNode* root) {
        if (root == nullptr) return true;
        
        deque<TreeNode*> queue;
        TreeNode* left = nullptr;
        TreeNode* right = nullptr;

        queue.push_front(root->left);
        queue.push_back(root->right);

        while (!queue.empty()) {
            left = queue.front();
            queue.pop_front();
            right = queue.front();
            queue.pop_front();

            if (left == nullptr && right == nullptr) continue;
            if (left == nullptr || right == nullptr) return false;
            if (left->val != right->val) return false;

            queue.push_back(left->left);
            queue.push_back(right->right);
            queue.push_back(left->right);
            queue.push_back(right->left);
        }
        return true;
    }
};
