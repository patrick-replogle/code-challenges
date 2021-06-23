# Given a binary tree, find its maximum depth.

# The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

# Note: A leaf is a node with no children.

# Example:

# Given binary tree [3,9,20,null,null,15,7],

#      3
#     / \
#    9  20
#      /  \
#     15   7
#  return its depth = 3.

# recursive solution
class Solution:
    def maxDepth(self, root: TreeNode) -> int:
        if not root:
            return 0;
        if root and not root.left and not root.right:
            return 1;
        
        left = self.findDepth(root.left, 1)
        right = self.findDepth(root.right, 1)
        
        return max(left, right)
        
    def findDepth(self, root: TreeNode, depth: int) -> int:
        if not root:
            return depth
        
        if root and not root.left and not root.right:
            return depth + 1
        
        return max(self.findDepth(root.left, depth + 1), self.findDepth(root.right, depth + 1))
    
    # iterative solution
    class Solution:
    def maxDepth(self, root: TreeNode) -> int:
        if not root:
            return 0
        
        if root and not root.left and not root.right:
            return 1
        
        output = 0
        stack = [[root, 1]]
        
        while len(stack) > 0:
            node, depth = stack.pop()
            
            if node and not node.left and not node.right:
                output = max(output, depth)
                
            if node.left:
                stack.append([node.left, depth + 1])
                
            if node.right:
                stack.append([node.right, depth + 1])
        
        return output
        
        
        
