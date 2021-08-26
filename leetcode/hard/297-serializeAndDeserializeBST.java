public class Codec {
    public String serialize(TreeNode root) {        
        LinkedList<TreeNode> queue = new LinkedList<>();
        StringBuilder sb = new StringBuilder();
        
        queue.addFirst(root);
        
        while (!queue.isEmpty()) {
            TreeNode currNode = queue.poll();
            if (currNode == null) {
                sb.append("null,");
            } else {
                sb.append(currNode.val + ",");
                queue.addLast(currNode.left);
                queue.addLast(currNode.right); 
            }
        }
        sb.deleteCharAt(sb.length() - 1);
        
        return sb.toString();
    }

    public TreeNode deserialize(String data) {
        if (data.equals("null")) return null;
        
        String[] arr = data.split(",");
        LinkedList<TreeNode> queue = new LinkedList<>();
        TreeNode root = new TreeNode(Integer.parseInt(arr[0]));
        int index = 1;
        
        queue.addFirst(root);
        
        while (!queue.isEmpty()) {
            int size = queue.size();
            
            for (int i = 0; i < size; i++) {
                TreeNode curr = queue.removeFirst();
                
                if (!arr[index].equals("null")) {
                    curr.left = new TreeNode(Integer.parseInt(arr[index]));
                    queue.addLast(curr.left);
                }
                index++;
                
                if (!arr[index].equals("null")) {
                    curr.right = new TreeNode(Integer.parseInt(arr[index]));
                    queue.addLast(curr.right);
                }
                index++;
            }
        }
        return root;
    }  
}
