String simplifyPath(String path) {
    Stack<String> stack = new Stack<>();
    StringBuilder sb = new StringBuilder();
    
    String[] arr = path.split("/");
    
    for (String str : arr) {
        if (str.equals("..") && !stack.isEmpty()) {
           stack.pop();
        } else if (str.length() > 0 && !str.equals(".") && !str.equals("..")) {
            stack.push(str);
        }
    }
    
    for (int i = 0; i < stack.size() ; i++) {
        sb.append("/" + stack.get(i));
    }
    
    return sb.length() > 0 ? sb.toString() : "/";
}
