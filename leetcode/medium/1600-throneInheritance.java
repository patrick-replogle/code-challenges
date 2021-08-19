class TreeNode {
    String name;
    List<String> children = new ArrayList<>();
    boolean isDead = false;
    
    public TreeNode(String newName) {
        this.name = newName;
    }
    public boolean getIsDead() {
        return isDead;
    }
    
    public void setIsDead(boolean bool) {
        isDead = bool;
    }
    
    public List<String> getChildren() {
        return children;
    }
    
    public void addChildren(String child) {
        children.add(child);
    }
    public String getName() {
        return name;
    }
    
}


class ThroneInheritance {
    String king;
    Map<String, TreeNode> kingdom = new HashMap<>();

    public ThroneInheritance(String kingName) {
        king = kingName;
        kingdom.put(kingName, new TreeNode(kingName));
    }
    
    public void birth(String parentName, String childName) {
        kingdom.put(childName, new TreeNode(childName));
        kingdom.get(parentName).addChildren(childName);
    }
    
    public void death(String name) {
        kingdom.get(name).setIsDead(true);
    }
    
    public List<String> getInheritanceOrder() {
        List<String> output = new ArrayList<>();
        Stack<TreeNode> stack = new Stack<>();
        
        stack.push(kingdom.get(king));
        
        while (!stack.isEmpty()) {
            TreeNode curr = stack.pop();
            if (!curr.getIsDead()) output.add(curr.getName());
            
            for (int i = curr.getChildren().size() - 1; i >= 0; i--) {
                TreeNode child = kingdom.get(curr.getChildren().get(i));
                stack.push(child);
            }
        }
        
        return output;
    }
}
