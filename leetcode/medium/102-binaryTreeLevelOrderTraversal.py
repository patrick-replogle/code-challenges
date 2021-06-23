// Given a binary tree, return the level order traversal of its nodes' values. (ie, from left to right, level by level).

// For example:
// Given binary tree [3,9,20,null,null,15,7],
//     3
//    / \
//   9  20
//     /  \
//    15   7
// return its level order traversal as:
// [
//   [3],
//   [9,20],
//   [15,7]
// ]

// iterative BFS using a queue
class Solution:
    def levelOrder(self, root: TreeNode) -> List[List[int]]:
        if not root:
            return []
        
        queue: List[TreeNode] = [root]
        result: List[List[int]] = []
            
        while len(queue) > 0:
            temp: List[int] = []
            currLen: int = len(queue)
            
            for _ in range(currLen):
                curr: TreeNode = queue.pop(0)
                temp.append(curr.val)
                
                if curr.left:
                    queue.append(curr.left)
                if curr.right:
                    queue.append(curr.right)
                    
            result.append(temp)
                
        return result
        
 // recursive solution
 class Solution:
    def levelOrder(self, root: TreeNode) -> List[List[int]]:
        result: List[List[int]] = []
        
        self.DFT(root, 0, result)
        
        return result
    
    def DFT(self, root: TreeNode, depth: int, result: List[List[int]]):
        if not root:
            return
        print(root.val)
        if len(result) <= depth:
            result.append([])
        
        result[depth].append(root.val);
        
        self.DFT(root.left, depth + 1, result)
        self.DFT(root.right, depth + 1, result)
        
