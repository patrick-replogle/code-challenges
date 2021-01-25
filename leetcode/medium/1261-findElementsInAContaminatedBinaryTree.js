// Given a binary tree with the following rules:

// root.val == 0
// If treeNode.val == x and treeNode.left != null, then treeNode.left.val == 2 * x + 1
// If treeNode.val == x and treeNode.right != null, then treeNode.right.val == 2 * x + 2
// Now the binary tree is contaminated, which means all treeNode.val have been changed to -1.

// You need to first recover the binary tree and then implement the FindElements class:

// FindElements(TreeNode* root) Initializes the object with a contamined binary tree, you need to recover it first.
// bool find(int target) Return if the target value exists in the recovered binary tree.
 

// Example 1:
// Input
// ["FindElements","find","find"]
// [[[-1,null,-1]],[1],[2]]
// Output
// [null,false,true]
// Explanation
// FindElements findElements = new FindElements([-1,null,-1]); 
// findElements.find(1); // return False 
// findElements.find(2); // return True 

// first pass solution
class FindElements {
    constructor(root) {
        this.root = root;
        this.recover();
    }
    recover() {
       if (!this.root) return null;
        
        this.root.val = 0;
    
        function traverse(root, parentVal, identifier) {
            if (identifier === 'left') root.val = parentVal * 2 + 1;
            if (identifier === 'right') root.val = parentVal * 2 + 2;
            if (root.left) traverse(root.left, root.val, 'left');
            if (root.right) traverse(root.right, root.val, 'right');
        }
        traverse(this.root, 0, 'root');
    }
    find(target) {
        let stack = [this.root];
        
        while (stack.length) {
            let curr = stack.pop();
            if (curr.val === target) return true;
            if (curr.left) stack.push(curr.left);
            if (curr.right) stack.push(curr.right);
        }
        return false;
    }
}
