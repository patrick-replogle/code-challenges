class MinStack {
    private ArrayList<Integer> stack;
    private ArrayList<Integer> min;
    
    public MinStack() {
        stack = new ArrayList<>();
        min = new ArrayList<>();
    }
    
    public void push(int val) {
        stack.add(val);
        if (min.size() == 0 || val <= min.get(min.size() - 1)) {
            min.add(val);
        }
    }
    
    public void pop() {
        if (stack.size() > 0) {
            int val = stack.get(stack.size() - 1);
            stack.remove(stack.size() - 1);
            if (val == min.get(min.size() - 1)) {
                min.remove(min.size() - 1);
            }
        }
    }
    
    public int top() {
        return stack.get(stack.size() - 1);
    }
    
    public int getMin() {
        return min.get(min.size() - 1);
    }
}
