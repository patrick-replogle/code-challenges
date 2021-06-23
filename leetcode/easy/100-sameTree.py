# Given two binary trees, write a function to check if they are the same or not.

# Two binary trees are considered the same if they are structurally identical and the nodes have the same value.

# Example 1:

# Input:     1         1
#           / \       / \
#          2   3     2   3

#         [1,2,3],   [1,2,3]

# Output: true
# Example 2:

# Input:     1         1
#           /           \
#          2             2

#         [1,2],     [1,null,2]

# Output: false

# iterative solution using stack
class Solution:
    def isSameTree(self, p: TreeNode, q: TreeNode) -> bool:
        stack = [[p, q]]
        
        while len(stack) > 0:
            node1, node2 = stack.pop()
            
            if not node1 and not node2:
                continue
            
            if not node1 or not node2:
                return False
            
            if node1.val != node2.val:
                return False
            
            stack.append([node1.left, node2.left])
            stack.append([node1.right, node2.right])
        
        return True

# resursive solution
class Solution:
    def isSameTree(self, p: TreeNode, q: TreeNode) -> bool:
        if not p and not q:
            return True
        
        elif not p or not q:
            return False
        
        elif p.val != q.val:
            return False
        
        else:
            return self.isSameTree(p.left, q.left) and self.isSameTree(p.right, q.right)
