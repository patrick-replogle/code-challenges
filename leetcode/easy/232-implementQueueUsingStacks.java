class MyQueue {
    private Stack<Integer> stack1;
    private Stack<Integer> stack2;
    public MyQueue() {
        stack1 = new Stack<>();
        stack2 = new Stack<>();
        
    }
    
    public void push(int x) {
        stack1.push(x);
    }
    
    public int pop() {
        while (stack1.size() > 0) {
            stack2.push(stack1.pop());
        }
        int output = stack2.pop();
        
        while (stack2.size() > 0) {
            stack1.push(stack2.pop());
        }
        return output;
    }
    
    public int peek() {
        return stack1.get(0);
    }
    
    public boolean empty() {
        return stack1.isEmpty();
    }
}
